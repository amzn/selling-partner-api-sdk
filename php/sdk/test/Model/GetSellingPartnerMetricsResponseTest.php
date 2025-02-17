<?php
/**
 * GetSellingPartnerMetricsResponseTest
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
use SpApi\Model\replenishment\v2022_11_07\GetSellingPartnerMetricsResponse;

/**
 * GetSellingPartnerMetricsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getSellingPartnerMetrics&#x60; operation.
 * @package     SpApi
 */
class GetSellingPartnerMetricsResponseTest extends TestCase
{

    private GetSellingPartnerMetricsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSellingPartnerMetricsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSellingPartnerMetricsResponse"
     */
    public function testGetSellingPartnerMetricsResponse()
    {
        $this->assertInstanceOf(GetSellingPartnerMetricsResponse::class, $this->model);
    }

    /**
     * Test attribute "metrics"
     */
    public function testPropertyMetrics()
    {
        $testValue = [];
        
        $this->model->setMetrics($testValue);
        $this->assertEquals($testValue, $this->model->getMetrics());
    }
}
