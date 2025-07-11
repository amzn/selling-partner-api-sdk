<?php

/**
 * DefaultApi
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for Finances.
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
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
use SpApi\ApiException;
use SpApi\AuthAndAuth\RestrictedDataTokenSigner;
use SpApi\Configuration;
use SpApi\HeaderSelector;
use SpApi\Model\finances\v2024_06_19\ListTransactionsResponse;
use SpApi\ObjectSerializer;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;

/**
 * DefaultApi Class Doc Comment.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class DefaultApi
{
    public ?LimiterInterface $listTransactionsRateLimiter;
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

            $factory = new RateLimiterFactory(Configuration::getRateLimitOptions('DefaultApi-listTransactions'), $this->rateLimitStorage);
            $this->listTransactionsRateLimiter = $factory->create('DefaultApi-listTransactions');
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
     * Operation listTransactions.
     *
     * @param \DateTime      $posted_after
     *                                            The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param null|\DateTime $posted_before
     *                                            A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. (optional)
     * @param null|string    $marketplace_id
     *                                            The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (optional)
     * @param null|string    $transaction_status
     *                                            The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released. (optional)
     * @param null|string    $next_token
     *                                            A string token returned in the response of your previous request. (optional)
     * @param null|string    $restrictedDataToken Restricted Data Token (RDT) for accessing restricted resources (optional, required for operations that return PII)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function listTransactions(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $transaction_status = null,
        ?string $next_token = null,
        ?string $restrictedDataToken = null
    ): ListTransactionsResponse {
        list($response) = $this->listTransactionsWithHttpInfo($posted_after, $posted_before, $marketplace_id, $transaction_status, $next_token, $restrictedDataToken);

        return $response;
    }

    /**
     * Operation listTransactionsWithHttpInfo.
     *
     * @param \DateTime      $posted_after
     *                                            The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param null|\DateTime $posted_before
     *                                            A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. (optional)
     * @param null|string    $marketplace_id
     *                                            The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (optional)
     * @param null|string    $transaction_status
     *                                            The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released. (optional)
     * @param null|string    $next_token
     *                                            A string token returned in the response of your previous request. (optional)
     * @param null|string    $restrictedDataToken Restricted Data Token (RDT) for accessing restricted resources (optional, required for operations that return PII)
     *
     * @return array of \SpApi\Model\finances\v2024_06_19\ListTransactionsResponse, HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function listTransactionsWithHttpInfo(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $transaction_status = null,
        ?string $next_token = null,
        ?string $restrictedDataToken = null
    ): array {
        $request = $this->listTransactionsRequest($posted_after, $posted_before, $marketplace_id, $transaction_status, $next_token);
        if (null !== $restrictedDataToken) {
            $request = RestrictedDataTokenSigner::sign($request, $restrictedDataToken, 'DefaultApi-listTransactions');
        } else {
            $request = $this->config->sign($request);
        }

        try {
            $options = $this->createHttpClientOption();

            try {
                if ($this->rateLimiterEnabled) {
                    $this->listTransactionsRateLimiter->consume()->ensureAccepted();
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
            if ('\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse' === '\SplFileObject') {
                $content = $response->getBody(); // stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ('\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse' !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, '\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse', []),
                $response->getStatusCode(),
                $response->getHeaders(),
            ];
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\finances\v2024_06_19\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation listTransactionsAsync.
     *
     * @param \DateTime      $posted_after
     *                                           The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param null|\DateTime $posted_before
     *                                           A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. (optional)
     * @param null|string    $marketplace_id
     *                                           The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (optional)
     * @param null|string    $transaction_status
     *                                           The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released. (optional)
     * @param null|string    $next_token
     *                                           A string token returned in the response of your previous request. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listTransactionsAsync(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $transaction_status = null,
        ?string $next_token = null
    ): PromiseInterface {
        return $this->listTransactionsAsyncWithHttpInfo($posted_after, $posted_before, $marketplace_id, $transaction_status, $next_token)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation listTransactionsAsyncWithHttpInfo.
     *
     * @param \DateTime      $posted_after
     *                                           The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param null|\DateTime $posted_before
     *                                           A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. (optional)
     * @param null|string    $marketplace_id
     *                                           The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (optional)
     * @param null|string    $transaction_status
     *                                           The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released. (optional)
     * @param null|string    $next_token
     *                                           A string token returned in the response of your previous request. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listTransactionsAsyncWithHttpInfo(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $transaction_status = null,
        ?string $next_token = null,
        ?string $restrictedDataToken = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\finances\v2024_06_19\ListTransactionsResponse';
        $request = $this->listTransactionsRequest($posted_after, $posted_before, $marketplace_id, $transaction_status, $next_token);
        if (null !== $restrictedDataToken) {
            $request = RestrictedDataTokenSigner::sign($request, $restrictedDataToken, 'DefaultApi-listTransactions');
        } else {
            $request = $this->config->sign($request);
        }
        if ($this->rateLimiterEnabled) {
            $this->listTransactionsRateLimiter->consume()->ensureAccepted();
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
     * Create request for operation 'listTransactions'.
     *
     * @param \DateTime      $posted_after
     *                                           The response includes financial events posted on or after this date. This date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The date-time must be more than two minutes before the time of the request. (required)
     * @param null|\DateTime $posted_before
     *                                           A date used for selecting transactions posted before (but not at) a specified time. The date-time must be later than PostedAfter and no later than two minutes before the request was submitted, in ISO 8601 date time format. If PostedAfter and PostedBefore are more than 180 days apart, no transactions are returned. You must specify the PostedAfter parameter if you specify the PostedBefore parameter. Default: Now minus two minutes. (optional)
     * @param null|string    $marketplace_id
     *                                           The identifier of the marketplace from which you want to retrieve transactions. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (optional)
     * @param null|string    $transaction_status
     *                                           The status of the transaction.  **Possible values:**  * &#x60;DEFERRED&#x60;: the transaction is currently deferred. * &#x60;RELEASED&#x60;: the transaction is currently released. * &#x60;DEFERRED_RELEASED&#x60;: the transaction was deferred in the past, but is now released. The status of a deferred transaction is updated to &#x60;DEFERRED_RELEASED&#x60; when the transaction is released. (optional)
     * @param null|string    $next_token
     *                                           A string token returned in the response of your previous request. (optional)
     *
     * @throws \InvalidArgumentException
     */
    public function listTransactionsRequest(
        \DateTime $posted_after,
        ?\DateTime $posted_before = null,
        ?string $marketplace_id = null,
        ?string $transaction_status = null,
        ?string $next_token = null
    ): Request {
        // verify the required parameter 'posted_after' is set
        if (null === $posted_after || (is_array($posted_after) && 0 === count($posted_after))) {
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
            true, // required
            $this->config
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $posted_before,
            'postedBefore', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false, // required
            $this->config
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $marketplace_id,
            'marketplaceId', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false, // required
            $this->config
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $transaction_status,
            'transactionStatus', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false, // required
            $this->config
        ) ?? []);
        // query params
        $queryParams = array_merge($queryParams, ObjectSerializer::toQueryValue(
            $next_token,
            'nextToken', // param base name
            'string', // openApiType
            '', // style
            false, // explode
            false, // required
            $this->config
        ) ?? []);

        $headers = $this->headerSelector->selectHeaders(
            ['application/json'],
            '',
            $multipart
        );

        // for model (json/xml)
        if (count($formParams) > 0) {
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
            'GET',
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
