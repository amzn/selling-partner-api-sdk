<?php
/**
 * GetFulfillmentPreviewResponseTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentPreviewResponse;

/**
 * GetFulfillmentPreviewResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getFulfillmentPreview&#x60; operation.
 * @package     SpApi
 */
class GetFulfillmentPreviewResponseTest extends TestCase
{

    private GetFulfillmentPreviewResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFulfillmentPreviewResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFulfillmentPreviewResponse"
     */
    public function testGetFulfillmentPreviewResponse()
    {
        $this->assertInstanceOf(GetFulfillmentPreviewResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentPreviewResult();
        
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
