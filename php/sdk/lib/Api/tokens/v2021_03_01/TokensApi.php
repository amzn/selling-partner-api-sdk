<?php

/**
 * TokensApi
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Tokens.
 *
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Api\tokens\v2021_03_01;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\PromiseInterface;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use SpApi\ApiException;
use SpApi\AuthAndAuth\RestrictedDataTokenSigner;
use SpApi\Configuration;
use SpApi\HeaderSelector;
use SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenRequest;
use SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse;
use SpApi\ObjectSerializer;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;

/**
 * TokensApi Class Doc Comment.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class TokensApi
{
    public ?LimiterInterface $createRestrictedDataTokenRateLimiter;
    protected ClientInterface $client;

    protected Configuration $config;

    protected HeaderSelector $headerSelector;

    /**
     * @var int Host index
     */
    protected int $hostIndex;

    private bool $rateLimiterEnabled;
    private InMemoryStorage $rateLimitStorage;

    /**
     * @param int $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        Configuration $config,
        ?ClientInterface $client = null,
        ?bool $rateLimiterEnabled = true,
        ?HeaderSelector $selector = null,
        int $hostIndex = 0
    ) {
        $this->config = $config;
        $this->rateLimiterEnabled = $rateLimiterEnabled;

        if ($rateLimiterEnabled) {
            $this->rateLimitStorage = new InMemoryStorage();

            $factory = new RateLimiterFactory(Configuration::getRateLimitOptions('TokensApi-createRestrictedDataToken'), $this->rateLimitStorage);
            $this->createRestrictedDataTokenRateLimiter = $factory->create('TokensApi-createRestrictedDataToken');
        }

        $this->client = $client ?: new Client();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index.
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex(int $hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index.
     *
     * @return int Host index
     */
    public function getHostIndex(): int
    {
        return $this->hostIndex;
    }

    public function getConfig(): Configuration
    {
        return $this->config;
    }

    /**
     * Operation createRestrictedDataToken.
     *
     * @param CreateRestrictedDataTokenRequest $body
     *                                                              The restricted data token request details. (required)
     * @param null|string                      $restrictedDataToken Restricted Data Token (RDT) for accessing restricted resources (optional, required for operations that return PII)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function createRestrictedDataToken(
        CreateRestrictedDataTokenRequest $body,
        ?string $restrictedDataToken = null
    ): CreateRestrictedDataTokenResponse {
        list($response) = $this->createRestrictedDataTokenWithHttpInfo($body, $restrictedDataToken);

        return $response;
    }

    /**
     * Operation createRestrictedDataTokenWithHttpInfo.
     *
     * @param CreateRestrictedDataTokenRequest $body
     *                                                              The restricted data token request details. (required)
     * @param null|string                      $restrictedDataToken Restricted Data Token (RDT) for accessing restricted resources (optional, required for operations that return PII)
     *
     * @return array of \SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse, HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function createRestrictedDataTokenWithHttpInfo(
        CreateRestrictedDataTokenRequest $body,
        ?string $restrictedDataToken = null
    ): array {
        $request = $this->createRestrictedDataTokenRequest($body);
        if (null !== $restrictedDataToken) {
            $request = RestrictedDataTokenSigner::sign($request, $restrictedDataToken, 'TokensApi-createRestrictedDataToken');
        } else {
            $request = $this->config->sign($request);
        }

        try {
            $options = $this->createHttpClientOption();

            try {
                if ($this->rateLimiterEnabled) {
                    $this->createRestrictedDataTokenRateLimiter->consume()->ensureAccepted();
                }
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getResponse()->getBody()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            } catch (ConnectException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    null,
                    null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }
            if ('\SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse' === '\SplFileObject') {
                $content = $response->getBody(); // stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ('\SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse' !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, '\SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse', []),
                $response->getStatusCode(),
                $response->getHeaders(),
            ];
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\tokens\v2021_03_01\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation createRestrictedDataTokenAsync.
     *
     * @param CreateRestrictedDataTokenRequest $body
     *                                               The restricted data token request details. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function createRestrictedDataTokenAsync(
        CreateRestrictedDataTokenRequest $body
    ): PromiseInterface {
        return $this->createRestrictedDataTokenAsyncWithHttpInfo($body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation createRestrictedDataTokenAsyncWithHttpInfo.
     *
     * @param CreateRestrictedDataTokenRequest $body
     *                                               The restricted data token request details. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function createRestrictedDataTokenAsyncWithHttpInfo(
        CreateRestrictedDataTokenRequest $body,
        ?string $restrictedDataToken = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenResponse';
        $request = $this->createRestrictedDataTokenRequest($body);
        if (null !== $restrictedDataToken) {
            $request = RestrictedDataTokenSigner::sign($request, $restrictedDataToken, 'TokensApi-createRestrictedDataToken');
        } else {
            $request = $this->config->sign($request);
        }
        if ($this->rateLimiterEnabled) {
            $this->createRestrictedDataTokenRateLimiter->consume()->ensureAccepted();
        }

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ('\SplFileObject' === $returnType) {
                        $content = $response->getBody(); // stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('string' !== $returnType) {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders(),
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();

                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            )
        ;
    }

    /**
     * Create request for operation 'createRestrictedDataToken'.
     *
     * @param CreateRestrictedDataTokenRequest $body
     *                                               The restricted data token request details. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function createRestrictedDataTokenRequest(
        CreateRestrictedDataTokenRequest $body
    ): Request {
        // verify the required parameter 'body' is set
        if (null === $body || (is_array($body) && 0 === count($body))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $body when calling createRestrictedDataToken'
            );
        }

        $resourcePath = '/tokens/2021-03-01/restrictedDataToken';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        $headers = $this->headerSelector->selectHeaders(
            ['application/json'],
            'application/json',
            $multipart
        );

        // for model (json/xml)
        if (isset($body)) {
            if ('application/json' === $headers['Content-Type']) {
                $httpBody = \GuzzleHttp\json_encode(ObjectSerializer::sanitizeForSerialization($body));
            } else {
                $httpBody = $body;
            }
        } elseif (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem,
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);
            } elseif ('application/json' === $headers['Content-Type']) {
                $httpBody = \GuzzleHttp\json_encode($formParams);
            } else {
                // for HTTP post (form)
                $httpBody = ObjectSerializer::buildQuery($formParams, $this->config);
            }
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = ObjectSerializer::buildQuery($queryParams, $this->config);

        return new Request(
            'POST',
            $this->config->getHost().$resourcePath.($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option.
     *
     * @return array of http client options
     *
     * @throws \RuntimeException on file opening failure
     */
    protected function createHttpClientOption(): array
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: '.$this->config->getDebugFile());
            }
        }

        return $options;
    }
}
