<?php

namespace SpApi\AuthAndAuth;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Psr7\Request;

class LWAClient
{
    private Client $client;

    private string $endpoint;

    private ?LWAAccessTokenCache $lwaAccessTokenCache = null;

    public function __construct(string $endpoint)
    {
        $this->client = new Client();
        $this->endpoint = $endpoint;
    }

    public function setLWAAccessTokenCache(?LWAAccessTokenCache $tokenCache): void
    {
        $this->lwaAccessTokenCache = $tokenCache;
    }

    public function getAccessToken(LWAAccessTokenRequestMeta &$lwaAccessTokenRequestMeta): string
    {
        if (null !== $this->lwaAccessTokenCache) {
            return $this->getAccessTokenFromCache($lwaAccessTokenRequestMeta);
        }

        return $this->getAccessTokenFromEndpoint($lwaAccessTokenRequestMeta);
    }

    public function getAccessTokenFromCache(LWAAccessTokenRequestMeta &$lwaAccessTokenRequestMeta)
    {
        $requestBody = json_encode($lwaAccessTokenRequestMeta);
        if (!$requestBody) {
            throw new \RuntimeException('Request body could not be encoded');
        }
        $accessTokenCacheData = $this->lwaAccessTokenCache->get($requestBody);
        if (null !== $accessTokenCacheData) {
            return $accessTokenCacheData;
        }

        return $this->getAccessTokenFromEndpoint($lwaAccessTokenRequestMeta);
    }

    public function getAccessTokenFromEndpoint(LWAAccessTokenRequestMeta &$lwaAccessTokenRequestMeta)
    {
        $requestBody = json_encode($lwaAccessTokenRequestMeta);

        if (!$requestBody) {
            throw new \RuntimeException('Request body could not be encoded');
        }

        $contentHeader = [
            'Content-Type' => 'application/json',
        ];

        $maxRetries = 3;
        $retryDelay = 100000; // 100ms in microseconds
        $lastException = null;

        for ($attempt = 0; $attempt <= $maxRetries; ++$attempt) {
            try {
                $lwaRequest = new Request('POST', $this->endpoint, $contentHeader, $requestBody);

                $lwaResponse = $this->client->send($lwaRequest);
                $responseJson = json_decode($lwaResponse->getBody(), true);

                if (!$responseJson['access_token'] || !$responseJson['expires_in']) {
                    throw new \RuntimeException('Response did not have required body');
                }

                $accessToken = $responseJson['access_token'];

                if (null !== $this->lwaAccessTokenCache) {
                    $timeToTokenExpire = (float) $responseJson['expires_in'];
                    $this->lwaAccessTokenCache->set($requestBody, $accessToken, $timeToTokenExpire);
                }

                return $accessToken;
            } catch (BadResponseException $e) {
                $lastException = $e;
                $statusCode = $e->getResponse() ? $e->getResponse()->getStatusCode() : 0;

                // Don't retry on 4xx errors except 429 (rate limit)
                if ($statusCode >= 400 && $statusCode < 500 && 429 !== $statusCode) {
                    throw new \RuntimeException('Unsuccessful LWA token exchange', $e->getCode());
                }

                // Retry on 5xx errors and 429
                if ($attempt < $maxRetries) {
                    usleep($retryDelay * (2 ** $attempt)); // Exponential backoff

                    continue;
                }
            } catch (GuzzleException $e) {
                $lastException = $e;

                // Retry on network errors
                if ($attempt < $maxRetries) {
                    usleep($retryDelay * (2 ** $attempt)); // Exponential backoff

                    continue;
                }
            } catch (\Exception $e) {
                throw new \RuntimeException('Error getting LWA Access Token', $e->getCode());
            }
        }

        // If we've exhausted all retries
        throw new \RuntimeException(
            'Error getting LWA Access Token after '.($maxRetries + 1).' attempts',
            $lastException ? $lastException->getCode() : 0
        );
    }

    public function setClient(Client $client): void
    {
        $this->client = $client;
    }

    public function getEndpoint(): string
    {
        return $this->endpoint;
    }
}
