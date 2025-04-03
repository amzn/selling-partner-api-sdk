<?php

/**
 * AppIntegrationsApi
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for third party application integrations.
 *
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * The version of the OpenAPI document: 2024-04-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Api\appIntegrations\v2024_04_01;

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
use SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationRequest;
use SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse;
use SpApi\Model\appIntegrations\v2024_04_01\DeleteNotificationsRequest;
use SpApi\Model\appIntegrations\v2024_04_01\RecordActionFeedbackRequest;
use SpApi\ObjectSerializer;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;

/**
 * AppIntegrationsApi Class Doc Comment.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class AppIntegrationsApi
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
     * Operation createNotification.
     *
     * @param CreateNotificationRequest $body
     *                                        The request body for the &#x60;createNotification&#x60; operation. (required)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function createNotification(
        CreateNotificationRequest $body
    ): CreateNotificationResponse {
        list($response) = $this->createNotificationWithHttpInfo($body);

        return $response;
    }

    /**
     * Operation createNotificationWithHttpInfo.
     *
     * @param CreateNotificationRequest $body
     *                                        The request body for the &#x60;createNotification&#x60; operation. (required)
     *
     * @return array of \SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse, HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function createNotificationWithHttpInfo(
        CreateNotificationRequest $body
    ): array {
        $request = $this->createNotificationRequest($body);
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
            if ('\SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse' === '\SplFileObject') {
                $content = $response->getBody(); // stream goes to serializer
            } else {
                $content = (string) $response->getBody();
                if ('\SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse' !== 'string') {
                    $content = json_decode($content);
                }
            }

            return [
                ObjectSerializer::deserialize($content, '\SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse', []),
                $response->getStatusCode(),
                $response->getHeaders(),
            ];
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\appIntegrations\v2024_04_01\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation createNotificationAsync.
     *
     * @param CreateNotificationRequest $body
     *                                        The request body for the &#x60;createNotification&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function createNotificationAsync(
        CreateNotificationRequest $body
    ): PromiseInterface {
        return $this->createNotificationAsyncWithHttpInfo($body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation createNotificationAsyncWithHttpInfo.
     *
     * @param CreateNotificationRequest $body
     *                                        The request body for the &#x60;createNotification&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function createNotificationAsyncWithHttpInfo(
        CreateNotificationRequest $body
    ): PromiseInterface {
        $returnType = '\SpApi\Model\appIntegrations\v2024_04_01\CreateNotificationResponse';
        $request = $this->createNotificationRequest($body);
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
     * Create request for operation 'createNotification'.
     *
     * @param CreateNotificationRequest $body
     *                                        The request body for the &#x60;createNotification&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function createNotificationRequest(
        CreateNotificationRequest $body
    ): Request {
        // verify the required parameter 'body' is set
        if (null === $body || (is_array($body) && 0 === count($body))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $body when calling createNotification'
            );
        }

        $resourcePath = '/appIntegrations/2024-04-01/notifications';
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
     * Operation deleteNotifications.
     *
     * @param DeleteNotificationsRequest $body
     *                                         The request body for the &#x60;deleteNotifications&#x60; operation. (required)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function deleteNotifications(
        DeleteNotificationsRequest $body
    ): void {
        $this->deleteNotificationsWithHttpInfo($body);
    }

    /**
     * Operation deleteNotificationsWithHttpInfo.
     *
     * @param DeleteNotificationsRequest $body
     *                                         The request body for the &#x60;deleteNotifications&#x60; operation. (required)
     *
     * @return array of , HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function deleteNotificationsWithHttpInfo(
        DeleteNotificationsRequest $body
    ): array {
        $request = $this->deleteNotificationsRequest($body);
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
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\appIntegrations\v2024_04_01\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation deleteNotificationsAsync.
     *
     * @param DeleteNotificationsRequest $body
     *                                         The request body for the &#x60;deleteNotifications&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function deleteNotificationsAsync(
        DeleteNotificationsRequest $body
    ): PromiseInterface {
        return $this->deleteNotificationsAsyncWithHttpInfo($body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation deleteNotificationsAsyncWithHttpInfo.
     *
     * @param DeleteNotificationsRequest $body
     *                                         The request body for the &#x60;deleteNotifications&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function deleteNotificationsAsyncWithHttpInfo(
        DeleteNotificationsRequest $body
    ): PromiseInterface {
        $returnType = '';
        $request = $this->deleteNotificationsRequest($body);
        $request = $this->config->sign($request);
        $this->rateLimitWait();

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) {
                    return [null, $response->getStatusCode(), $response->getHeaders()];
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
     * Create request for operation 'deleteNotifications'.
     *
     * @param DeleteNotificationsRequest $body
     *                                         The request body for the &#x60;deleteNotifications&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function deleteNotificationsRequest(
        DeleteNotificationsRequest $body
    ): Request {
        // verify the required parameter 'body' is set
        if (null === $body || (is_array($body) && 0 === count($body))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $body when calling deleteNotifications'
            );
        }

        $resourcePath = '/appIntegrations/2024-04-01/notifications/deletion';
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
     * Operation recordActionFeedback.
     *
     * @param string                      $notification_id
     *                                                     A &#x60;notificationId&#x60; uniquely identifies a notification. (required)
     * @param RecordActionFeedbackRequest $body
     *                                                     The request body for the &#x60;recordActionFeedback&#x60; operation. (required)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function recordActionFeedback(
        string $notification_id,
        RecordActionFeedbackRequest $body
    ): void {
        $this->recordActionFeedbackWithHttpInfo($notification_id, $body);
    }

    /**
     * Operation recordActionFeedbackWithHttpInfo.
     *
     * @param string                      $notification_id
     *                                                     A &#x60;notificationId&#x60; uniquely identifies a notification. (required)
     * @param RecordActionFeedbackRequest $body
     *                                                     The request body for the &#x60;recordActionFeedback&#x60; operation. (required)
     *
     * @return array of , HTTP status code, HTTP response headers (array of strings)
     *
     * @throws ApiException              on non-2xx response
     * @throws \InvalidArgumentException
     */
    public function recordActionFeedbackWithHttpInfo(
        string $notification_id,
        RecordActionFeedbackRequest $body
    ): array {
        $request = $this->recordActionFeedbackRequest($notification_id, $body);
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
        } catch (ApiException $e) {
            $data = ObjectSerializer::deserialize(
                $e->getResponseBody(),
                '\SpApi\Model\appIntegrations\v2024_04_01\ErrorList',
                $e->getResponseHeaders()
            );
            $e->setResponseObject($data);

            throw $e;
        }
    }

    /**
     * Operation recordActionFeedbackAsync.
     *
     * @param string                      $notification_id
     *                                                     A &#x60;notificationId&#x60; uniquely identifies a notification. (required)
     * @param RecordActionFeedbackRequest $body
     *                                                     The request body for the &#x60;recordActionFeedback&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function recordActionFeedbackAsync(
        string $notification_id,
        RecordActionFeedbackRequest $body
    ): PromiseInterface {
        return $this->recordActionFeedbackAsyncWithHttpInfo($notification_id, $body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            )
        ;
    }

    /**
     * Operation recordActionFeedbackAsyncWithHttpInfo.
     *
     * @param string                      $notification_id
     *                                                     A &#x60;notificationId&#x60; uniquely identifies a notification. (required)
     * @param RecordActionFeedbackRequest $body
     *                                                     The request body for the &#x60;recordActionFeedback&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function recordActionFeedbackAsyncWithHttpInfo(
        string $notification_id,
        RecordActionFeedbackRequest $body
    ): PromiseInterface {
        $returnType = '';
        $request = $this->recordActionFeedbackRequest($notification_id, $body);
        $request = $this->config->sign($request);
        $this->rateLimitWait();

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) {
                    return [null, $response->getStatusCode(), $response->getHeaders()];
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
     * Create request for operation 'recordActionFeedback'.
     *
     * @param string                      $notification_id
     *                                                     A &#x60;notificationId&#x60; uniquely identifies a notification. (required)
     * @param RecordActionFeedbackRequest $body
     *                                                     The request body for the &#x60;recordActionFeedback&#x60; operation. (required)
     *
     * @throws \InvalidArgumentException
     */
    public function recordActionFeedbackRequest(
        string $notification_id,
        RecordActionFeedbackRequest $body
    ): Request {
        // verify the required parameter 'notification_id' is set
        if (null === $notification_id || (is_array($notification_id) && 0 === count($notification_id))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $notification_id when calling recordActionFeedback'
            );
        }
        // verify the required parameter 'body' is set
        if (null === $body || (is_array($body) && 0 === count($body))) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $body when calling recordActionFeedback'
            );
        }

        $resourcePath = '/appIntegrations/2024-04-01/notifications/{notificationId}/feedback';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // path params
        if (null !== $notification_id) {
            $resourcePath = str_replace(
                '{notificationId}',
                ObjectSerializer::toPathValue($notification_id),
                $resourcePath
            );
        }

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
