<?php
/**
 * GetOrderRegulatedInfoResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\GetOrderRegulatedInfoResponse;

/**
 * GetOrderRegulatedInfoResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getOrderRegulatedInfo&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetOrderRegulatedInfoResponseTest extends TestCase
{

    private GetOrderRegulatedInfoResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOrderRegulatedInfoResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOrderRegulatedInfoResponse"
     */
    public function testGetOrderRegulatedInfoResponse()
    {
        $this->assertInstanceOf(GetOrderRegulatedInfoResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\OrderRegulatedInfo();
        
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
