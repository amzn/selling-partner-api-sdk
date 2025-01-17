<?php
/**
 * GetFeatureSkuResponseTest
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
use OpenAPI\Client\Model\fulfillment\outbound\GetFeatureSkuResponse;

/**
 * GetFeatureSkuResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getFeatureSKU&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetFeatureSkuResponseTest extends TestCase
{

    private GetFeatureSkuResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeatureSkuResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeatureSkuResponse"
     */
    public function testGetFeatureSkuResponse()
    {
        $this->assertInstanceOf(GetFeatureSkuResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\GetFeatureSkuResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
