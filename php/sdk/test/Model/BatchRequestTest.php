<?php
/**
 * BatchRequestTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\pricingv0\BatchRequest;

/**
 * BatchRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Common properties of batch requests against individual APIs.
 * @package     OpenAPI\Client
 */
class BatchRequestTest extends TestCase
{

    private BatchRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BatchRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BatchRequest"
     */
    public function testBatchRequest()
    {
        $this->assertInstanceOf(BatchRequest::class, $this->model);
    }

    /**
     * Test attribute "uri"
     */
    public function testPropertyUri()
    {
        $testValue = 'test';
        
        $this->model->setUri($testValue);
        $this->assertEquals($testValue, $this->model->getUri());
    }

    /**
     * Test attribute "method"
     */
    public function testPropertyMethod()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricingv0\HttpMethod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setMethod($testValue);
        $this->assertEquals($testValue, $this->model->getMethod());
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        
        $testValue = new array<string,string>();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }
}
