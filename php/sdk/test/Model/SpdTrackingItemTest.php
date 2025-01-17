<?php
/**
 * SpdTrackingItemTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\SpdTrackingItem;

/**
 * SpdTrackingItemTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information used to track and identify a Small Parcel Delivery (SPD) item.
 * @package     OpenAPI\Client
 */
class SpdTrackingItemTest extends TestCase
{

    private SpdTrackingItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SpdTrackingItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SpdTrackingItem"
     */
    public function testSpdTrackingItem()
    {
        $this->assertInstanceOf(SpdTrackingItem::class, $this->model);
    }

    /**
     * Test attribute "box_id"
     */
    public function testPropertyBoxId()
    {
        $testValue = 'test';
        
        $this->model->setBoxId($testValue);
        $this->assertEquals($testValue, $this->model->getBoxId());
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }

    /**
     * Test attribute "tracking_number_validation_status"
     */
    public function testPropertyTrackingNumberValidationStatus()
    {
        $testValue = 'test';
        
        $this->model->setTrackingNumberValidationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingNumberValidationStatus());
    }
}
