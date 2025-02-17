<?php
/**
 * GetShipmentItemsResponseTest
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
use SpApi\Model\fulfillment\inbound\v0\GetShipmentItemsResponse;

/**
 * GetShipmentItemsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getShipmentItems operation.
 * @package     SpApi
 */
class GetShipmentItemsResponseTest extends TestCase
{

    private GetShipmentItemsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentItemsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentItemsResponse"
     */
    public function testGetShipmentItemsResponse()
    {
        $this->assertInstanceOf(GetShipmentItemsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\GetShipmentItemsResult();
        
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
