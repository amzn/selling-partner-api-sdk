<?php
/**
 * GetSellingPartnerMetricsResponseTest
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
use OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsResponse;

/**
 * GetSellingPartnerMetricsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getSellingPartnerMetrics&#x60; operation.
 * @package     OpenAPI\Client
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
