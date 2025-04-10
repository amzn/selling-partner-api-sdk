<?php

/**
 * OffersApi
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Replenishment.
 *
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Api\replenishment\v2022_11_07;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\PromiseInterface;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use SpApi\ApiException;
use SpApi\AuthAndAuth\RateLimitConfiguration;
use SpApi\Configuration;
use SpApi\HeaderSelector;
use SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsRequest;
use SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponse;
use SpApi\Model\replenishment\v2022_11_07\ListOffersRequest;
use SpApi\Model\replenishment\v2022_11_07\ListOffersResponse;
use SpApi\ObjectSerializer;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;

/**
 * OffersApi Class Doc Comment.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class OffersApi
{
    protected ClientInterface $client;

    protected Configuration $config;

    protected HeaderSelector $headerSelector;

    /**
     * @var int Host index
     */
    protected int $hostIndex;

    private ?RateLimitConfiguration $rateLimitConfig = null;

    private ?LimiterInterface $rateLimiter = null;

    /**
     * @param int $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        Configuration $config,
        ?RateLimitConfiguration $rateLimitConfig = null,
        ?ClientInterface $client = null,
        ?HeaderSelector $selector = null,
        int $hostIndex = 0
    ) {
        $this->config = $config;
        $this->rateLimitConfig = $rateLimitConfig;
        if ($rateLimitConfig) {
            $type = $rateLimitConfig->getRateLimitType();
            $rateLimitOptions = [
                'id' => 'spApiCall',
                'policy' => $type,
                'limit' => $rateLimitConfig->getRateLimitTokenLimit(),
            ];
            if ('fixed_window' === $type || 'sliding_window' === $type) {
                $rateLimitOptions['interval'] = $rateLimitConfig->getRateLimitToken().'seconds';
            } else {
                $rateLimitOptions['rate'] = ['interval' => $rateLimitConfig->getRateLimitToken().'seconds'];
            }
            $factory = new RateLimiterFactory($rateLimitOptions, new InMemoryStorage());
            $this->rateLimiter = $factory->create();
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
     * Operation listOfferMetrics.
     *
     * @param null|ListOfferMetricsRequest $body
     *                                           The request body for the &#x60;listOfferMetrics&#x60; operation. (optional)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function listOfferMetrics(
        ?ListOfferMetricsRequest $body = null
    ): ListOfferMetricsResponse {
        list($response) = $this->listOfferMetricsWithHttpInfo($body);

        return $response;
    }

    /**
     * Operation listOfferMetricsWithHttpInfo.
     *
     * @param null|ListOfferMetricsRequest $body
     *                                           The request body for the &#x60;listOfferMetrics&#x60; operation. (optional)
     *
     * @return array of \SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponse, HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function listOfferMetricsWithHttpInfo(
        ?ListOfferMetricsRequest $body = null
    ): array {
        $request = $this->listOfferMetricsRequest($body);
        $request = $this->config->sign($request);

        try {
            $options = $this->createHttpClientOption();

            try {
                $this->rateLimitWait();
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
            if ('\SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponse' === '\SplFileObject') {
                $content = $response->getBody(); // stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ('\SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponse' !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, '\SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponse', []),
                $response->getStatusCode(),
                $response->getHeaders(),
            ];
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\replenishment\v2022_11_07\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation listOfferMetricsAsync.
     *
     * @param null|ListOfferMetricsRequest $body
     *                                           The request body for the &#x60;listOfferMetrics&#x60; operation. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listOfferMetricsAsync(
        ?ListOfferMetricsRequest $body = null
    ): PromiseInterface {
        return $this->listOfferMetricsAsyncWithHttpInfo($body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation listOfferMetricsAsyncWithHttpInfo.
     *
     * @param null|ListOfferMetricsRequest $body
     *                                           The request body for the &#x60;listOfferMetrics&#x60; operation. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listOfferMetricsAsyncWithHttpInfo(
        ?ListOfferMetricsRequest $body = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponse';
        $request = $this->listOfferMetricsRequest($body);
        $request = $this->config->sign($request);
        $this->rateLimitWait();

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
     * Create request for operation 'listOfferMetrics'.
     *
     * @param null|ListOfferMetricsRequest $body
     *                                           The request body for the &#x60;listOfferMetrics&#x60; operation. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listOfferMetricsRequest(
        ?ListOfferMetricsRequest $body = null
    ): Request {
        $resourcePath = '/replenishment/2022-11-07/offers/metrics/search';
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
     * Operation listOffers.
     *
     * @param null|ListOffersRequest $body
     *                                     The request body for the &#x60;listOffers&#x60; operation. (optional)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function listOffers(
        ?ListOffersRequest $body = null
    ): ListOffersResponse {
        list($response) = $this->listOffersWithHttpInfo($body);

        return $response;
    }

    /**
     * Operation listOffersWithHttpInfo.
     *
     * @param null|ListOffersRequest $body
     *                                     The request body for the &#x60;listOffers&#x60; operation. (optional)
     *
     * @return array of \SpApi\Model\replenishment\v2022_11_07\ListOffersResponse, HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function listOffersWithHttpInfo(
        ?ListOffersRequest $body = null
    ): array {
        $request = $this->listOffersRequest($body);
        $request = $this->config->sign($request);

        try {
            $options = $this->createHttpClientOption();

            try {
                $this->rateLimitWait();
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
            if ('\SpApi\Model\replenishment\v2022_11_07\ListOffersResponse' === '\SplFileObject') {
                $content = $response->getBody(); // stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ('\SpApi\Model\replenishment\v2022_11_07\ListOffersResponse' !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, '\SpApi\Model\replenishment\v2022_11_07\ListOffersResponse', []),
                $response->getStatusCode(),
                $response->getHeaders(),
            ];
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\replenishment\v2022_11_07\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation listOffersAsync.
     *
     * @param null|ListOffersRequest $body
     *                                     The request body for the &#x60;listOffers&#x60; operation. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listOffersAsync(
        ?ListOffersRequest $body = null
    ): PromiseInterface {
        return $this->listOffersAsyncWithHttpInfo($body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation listOffersAsyncWithHttpInfo.
     *
     * @param null|ListOffersRequest $body
     *                                     The request body for the &#x60;listOffers&#x60; operation. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listOffersAsyncWithHttpInfo(
        ?ListOffersRequest $body = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\replenishment\v2022_11_07\ListOffersResponse';
        $request = $this->listOffersRequest($body);
        $request = $this->config->sign($request);
        $this->rateLimitWait();

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
     * Create request for operation 'listOffers'.
     *
     * @param null|ListOffersRequest $body
     *                                     The request body for the &#x60;listOffers&#x60; operation. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listOffersRequest(
        ?ListOffersRequest $body = null
    ): Request {
        $resourcePath = '/replenishment/2022-11-07/offers/search';
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
     * Rate Limiter waits for tokens.
     */
    public function rateLimitWait(): void
    {
        if ($this->rateLimiter) {
            $type = $this->rateLimitConfig->getRateLimitType();
            if (0 != $this->rateLimitConfig->getTimeOut() && ('token_bucket' == $type || 'fixed_window' == $type)) {
                $this->rateLimiter->reserve(1, $this->rateLimitConfig->getTimeOut() / 1000)->wait();
            } else {
                $this->rateLimiter->consume()->wait();
            }
        }
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
