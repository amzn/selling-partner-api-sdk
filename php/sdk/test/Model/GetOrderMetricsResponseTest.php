<?php
/**
 * GetOrderMetricsResponseTest
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
use SpApi\Model\sales\v1\GetOrderMetricsResponse;

/**
 * GetOrderMetricsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getOrderMetrics operation.
 * @package     SpApi
 */
class GetOrderMetricsResponseTest extends TestCase
{

    private GetOrderMetricsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOrderMetricsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOrderMetricsResponse"
     */
    public function testGetOrderMetricsResponse()
    {
        $this->assertInstanceOf(GetOrderMetricsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = [];
        
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
