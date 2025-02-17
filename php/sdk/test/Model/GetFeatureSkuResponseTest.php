<?php
/**
 * GetFeatureSkuResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFeatureSkuResponse;

/**
 * GetFeatureSkuResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getFeatureSKU&#x60; operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\GetFeatureSkuResult();
        
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
