<?php
/**
 * VendorPaymentsApi
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Retail Procurement Payments
 *
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Api\vendor\invoices\v1;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\PromiseInterface;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use Symfony\Component\RateLimiter\LimiterInterface;
use Symfony\Component\RateLimiter\Storage\InMemoryStorage;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use SpApi\AuthAndAuth\RestrictedDataTokenSigner;
use SpApi\ApiException;
use SpApi\Configuration;
use SpApi\HeaderSelector;
use SpApi\ObjectSerializer;

/**
 * VendorPaymentsApi Class Doc Comment
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class VendorPaymentsApi
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

    private Bool $rateLimiterEnabled;
    private InMemoryStorage $rateLimitStorage;
    public ?LimiterInterface $submitInvoicesRateLimiter;

    /**
     * @param Configuration   $config
     * @param RateLimitConfiguration|null $rateLimitConfig
     * @param ClientInterface|null $client
     * @param HeaderSelector|null $selector
     * @param int $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        Configuration $config,
        ?ClientInterface $client = null,
        ?Bool $rateLimiterEnabled = true,
        ?HeaderSelector $selector = null,
        int $hostIndex = 0
    ) {
        $this->config = $config;
        $this->rateLimiterEnabled = $rateLimiterEnabled;

        if ($rateLimiterEnabled) {
            $this->rateLimitStorage = new InMemoryStorage();

            $factory = new RateLimiterFactory(Configuration::getRateLimitOptions("VendorPaymentsApi-submitInvoices"), $this->rateLimitStorage);
            $this->submitInvoicesRateLimiter = $factory->create("VendorPaymentsApi-submitInvoices");
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
     * Operation submitInvoices
     *
     * @param  \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
     *  The request body containing the invoice data to submit. (required)
     *
     * @param  string|null $restrictedDataToken Restricted Data Token (RDT) for accessing restricted resources (optional, required for operations that return PII)
     * @throws \SpApi\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse
     */
    public function submitInvoices(
        \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body,
        ?string $restrictedDataToken = null
    ): \SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse {
        list($response) = $this->submitInvoicesWithHttpInfo($body,$restrictedDataToken);
        return $response;
    }

    /**
     * Operation submitInvoicesWithHttpInfo
     *
     * @param  \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
     *  The request body containing the invoice data to submit. (required)
     *
     * @param  string|null $restrictedDataToken Restricted Data Token (RDT) for accessing restricted resources (optional, required for operations that return PII)
     * @throws \SpApi\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse, HTTP status code, HTTP response headers (array of strings)
     */
    public function submitInvoicesWithHttpInfo(
        \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body,
        ?string $restrictedDataToken = null
    ): array {
        $request = $this->submitInvoicesRequest($body);
        if ($restrictedDataToken !== null) {
            $request = RestrictedDataTokenSigner::sign($request, $restrictedDataToken, "VendorPaymentsApi-submitInvoices");
        } else {
            $request = $this->config->sign($request);
        }
        try {
            $options = $this->createHttpClientOption();
            try {
                if ($this->rateLimiterEnabled) {
                    $this->submitInvoicesRateLimiter->consume()->ensureAccepted();
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
                if ('\SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse' === '\SplFileObject') {
                    $content = $response->getBody(); //stream goes to serializer
                } else {
                    $content = (string) $response->getBody();
                    if ('\SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse' !== 'string') {
                        $content = json_decode($content);
                    }
                }

                return [
                    ObjectSerializer::deserialize($content, '\SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse', []),
                    $response->getStatusCode(),
                    $response->getHeaders()
                ];
        } catch (ApiException $e) {
                $data = ObjectSerializer::deserialize(
                    $e->getResponseBody(),
                    '\SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse',
                    $e->getResponseHeaders()
                );
                $e->setResponseObject($data);
            throw $e;
        }
    }

    /**
     * Operation submitInvoicesAsync
     *
     * @param  \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
     *  The request body containing the invoice data to submit. (required)
     *
     * @throws \InvalidArgumentException
     * @return PromiseInterface
     */
    public function submitInvoicesAsync(
        \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
    ): PromiseInterface {
        return $this->submitInvoicesAsyncWithHttpInfo($body)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation submitInvoicesAsyncWithHttpInfo
     *
     * @param  \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
     *  The request body containing the invoice data to submit. (required)
     *
     * @throws \InvalidArgumentException
     * @return PromiseInterface
     */
    public function submitInvoicesAsyncWithHttpInfo(
        \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body,
    ?string $restrictedDataToken = null
    ): PromiseInterface {
        $returnType = '\SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse';
        $request = $this->submitInvoicesRequest($body);
        if ($restrictedDataToken !== null) {
            $request = RestrictedDataTokenSigner::sign($request, $restrictedDataToken, "VendorPaymentsApi-submitInvoices");
        } else {
            $request = $this->config->sign($request);
        }
        if ($this->rateLimiterEnabled) {
            $this->submitInvoicesRateLimiter->consume()->ensureAccepted();
        }

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
     * Create request for operation 'submitInvoices'
     *
     * @param  \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
     *  The request body containing the invoice data to submit. (required)
     *
     * @throws \InvalidArgumentException
     * @return Request
     */
    public function submitInvoicesRequest(
        \SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest $body
    ): Request {
        // verify the required parameter 'body' is set
        if ($body === null || (is_array($body) && count($body) === 0)) {
            throw new \InvalidArgumentException(
                'Missing the required parameter $body when calling submitInvoices'
            );
        }

        $resourcePath = '/vendor/payments/v1/invoices';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;





        $headers = $this->headerSelector->selectHeaders(
            ['application/json'],
            'application/json'
            ,
            $multipart
        );

        // for model (json/xml)
        if (isset($body)) {
            if ($headers['Content-Type'] === 'application/json') {
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
            'POST',
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
}
