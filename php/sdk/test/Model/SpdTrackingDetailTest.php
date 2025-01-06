<?php
/**
 * SpdTrackingDetailTest
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
use OpenAPI\Client\Model\fulfillmentInbound\SpdTrackingDetail;

/**
 * SpdTrackingDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information related to Small Parcel Delivery (SPD) shipment tracking.
 * @package     OpenAPI\Client
 */
class SpdTrackingDetailTest extends TestCase
{

    private SpdTrackingDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SpdTrackingDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SpdTrackingDetail"
     */
    public function testSpdTrackingDetail()
    {
        $this->assertInstanceOf(SpdTrackingDetail::class, $this->model);
    }

    /**
     * Test attribute "spd_tracking_items"
     */
    public function testPropertySpdTrackingItems()
    {
        $testValue = [];
        
        $this->model->setSpdTrackingItems($testValue);
        $this->assertEquals($testValue, $this->model->getSpdTrackingItems());
    }
}
