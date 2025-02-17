<?php
/**
 * DefaultApi
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for Finances
 *
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Api\finances\v2024_06_19;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\PromiseInterface;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use SpApi\AuthAndAuth\RateLimitConfiguration;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use SpApi\ApiException;
use SpApi\Configuration;
use SpApi\HeaderSelector;
use SpApi\ObjectSerializer;

/**
 * DefaultApi Class Doc Comment
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class DefaultApi
{
    /**
     * @var ClientInterface
     */
    protected ClientInterface $client;

    /**
     * @var Configuration
     */
    protected Configuration $config;

    /**
     * @var HeaderSelector
     */
    protected HeaderSelector $headerSelector;

    /**
     * @var int Host index
     */
    protected int $hostIndex;

    /**
     * @var ?RateLimitConfiguration
     */
    private ?RateLimitConfiguration $rateLimitConfig = null;

    /**
     * @var ?LimiterInterface
     */
    private ?LimiterInterface $rateLimiter = null;

    /**
     * @param Configuration   $config
     * @param RateLimitConfiguration|null $rateLimitConfig
     * @param ClientInterface|null $client
     * @param HeaderSelector|null $selector
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
            if ($type === "fixed_window" || $type === "sliding_window") {
                $rateLimitOptions['interval'] = $rateLimitConfig->getRateLimitToken() . 'seconds';
            } else {
                $rateLimitOptions['rate'] = ['interval' => $rateLimitConfig->getRateLimitToken() . 'seconds'];
            }
            $factory = new RateLimiterFactory($rateLimitOptions, new InMemoryStorage());
            $this->rateLimiter = $factory->create();
        }

        $this->client = $client ?: new Client();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex(int $hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index
     *
     * @return int Host index
     */
    public function getHostIndex(): int
    {
        return $this->hostIndex;
    }

    /**
     * @return Configuration
     */
    public function getConfig(): Configuration
    {
        return $this->config;
    }

    /**
     * Operation listTransactions
     *
     * @param  \DateTime $posted_after
     *  The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param  \DateTime|null $posted_before
     *  The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request. (optional)
     * @param  string|null $marketplace_id
     *  The ID of the marketplace from which you want to retrieve transactions. (optional)
     * @param  string|null $next_token
     *  The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. (optional)
     *
     * @throws \SpApi\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \SpApi\Model\finances\v2024_06_19\ListTransactionsResponse
     */
    public function listTransactions(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $next_token = null
    ): \SpApi\Model\finances\v2024_06_19\ListTransactionsResponse {
        list($response) = $this->listTransactionsWithHttpInfo($posted_after, $posted_before, $marketplace_id, $next_token);
        return $response;
    }

    /**
     * Operation listTransactionsWithHttpInfo
     *
     * @param  \DateTime $posted_after
     *  The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param  \DateTime|null $posted_before
     *  The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request. (optional)
     * @param  string|null $marketplace_id
     *  The ID of the marketplace from which you want to retrieve transactions. (optional)
     * @param  string|null $next_token
     *  The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. (optional)
     *
     * @throws \SpApi\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \SpApi\Model\finances\v2024_06_19\ListTransactionsResponse, HTTP status code, HTTP response headers (array of strings)
     */
    public function listTransactionsWithHttpInfo(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $next_token = null
    ): array {
        $request = $this->listTransactionsRequest($posted_after, $posted_before, $marketplace_id, $next_token);
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

            switch($statusCode) {
                case 200:
                    if ('\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 400:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 403:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 404:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 415:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 413:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 429:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 500:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 503:
                    if ('\SpApi\Model\finances\v2024_06_19\ErrorList' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ('\SpApi\Model\finances\v2024_06_19\ErrorList' !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ErrorList', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = '\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse';
            if ($returnType === '\SplFileObject') {
                $content = $response->getBody(); //stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ($returnType !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 400:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 403:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 404:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 415:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 413:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 429:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 500:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 503:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\SpApi\Model\finances\v2024_06_19\ErrorList',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation listTransactionsAsync
     *
     * @param  \DateTime $posted_after
     *  The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param  \DateTime|null $posted_before
     *  The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request. (optional)
     * @param  string|null $marketplace_id
     *  The ID of the marketplace from which you want to retrieve transactions. (optional)
     * @param  string|null $next_token
     *  The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. (optional)
     *
     * @throws \InvalidArgumentException
     * @return PromiseInterface
     */
    public function listTransactionsAsync(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $next_token = null
    ): PromiseInterface {
        return $this->listTransactionsAsyncWithHttpInfo($posted_after, $posted_before, $marketplace_id, $next_token)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation listTransactionsAsyncWithHttpInfo
     *
     * @param  \DateTime $posted_after
     *  The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param  \DateTime|null $posted_before
     *  The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request. (optional)
     * @param  string|null $marketplace_id
     *  The ID of the marketplace from which you want to retrieve transactions. (optional)
     * @param  string|null $next_token
     *  The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. (optional)
     *
     * @throws \InvalidArgumentException
     * @return PromiseInterface
     */
    public function listTransactionsAsyncWithHttpInfo(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $next_token = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse';
        $request = $this->listTransactionsRequest($posted_after, $posted_before, $marketplace_id, $next_token);
        $request = $this->config->sign($request);
        $this->rateLimitWait();

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ($returnType === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                        if ($returnType !== 'string') {
                            $content = json_decode($content);
                        }
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
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
            );
    }

    /**
     * Create request for operation 'listTransactions'
     *
     * @param  \DateTime $posted_after
     *  The response includes financial events posted after (or on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param  \DateTime|null $posted_before
     *  The response includes financial events posted before (but not on) this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.  The date-time must be later than &#x60;PostedAfter&#x60; and more than two minutes before the request was submitted. If &#x60;PostedAfter&#x60; and &#x60;PostedBefore&#x60; are more than 180 days apart, the response is empty.  **Default:** Two minutes before the time of the request. (optional)
     * @param  string|null $marketplace_id
     *  The ID of the marketplace from which you want to retrieve transactions. (optional)
     * @param  string|null $next_token
     *  The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages. (optional)
     *
     * @throws \InvalidArgumentException
     * @return Request
     */
    public function listTransactionsRequest(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $next_token = null
    ): Request {
        // verify the required parameter 'posted_after' is set
        if ($posted_after === null || (is_array($posted_after) && count($posted_after) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $posted_after when calling listTransactions'
            );
        }

        $resourcePath = '/finances/2024-06-19/transactions';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $posted_after,
            'postedAfter', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            true // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $posted_before,
            'postedBefore', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $marketplace_id,
            'marketplaceId', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false // required
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $next_token,
            'nextToken', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false // required
        ) ?? []);




        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                
                '',
                false
            );
        }

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif ($headers['Content-Type'] === 'application/json') {
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
            'GET',
            $this->config->getHost() . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption(): array
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }

    /**
     * Rate Limiter waits for tokens
     *
     * @return void
     */
    public function rateLimitWait(): void
    {
        if ($this->rateLimiter) {
            $type = $this->rateLimitConfig->getRateLimitType();
            if ($this->rateLimitConfig->getTimeOut() != 0 && ($type == "token_bucket" || $type == "fixed_window")) {
                $this->rateLimiter->reserve(1, ($this->rateLimitConfig->getTimeOut()) / 1000)->wait();
            } else {
                $this->rateLimiter->consume()->wait();
            }
        }
    }
}
