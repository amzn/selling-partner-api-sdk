<?php
/**
 * OrderScheduleDetailsTest
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
use OpenAPI\Client\Model\easyship\OrderScheduleDetails;

/**
 * OrderScheduleDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description This object allows users to specify an order to be scheduled. Only the amazonOrderId is required.
 * @package     OpenAPI\Client
 */
class OrderScheduleDetailsTest extends TestCase
{

    private OrderScheduleDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderScheduleDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderScheduleDetails"
     */
    public function testOrderScheduleDetails()
    {
        $this->assertInstanceOf(OrderScheduleDetails::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "package_details"
     */
    public function testPropertyPackageDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\easyship\PackageDetails();
        
        $this->model->setPackageDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDetails());
    }
}
