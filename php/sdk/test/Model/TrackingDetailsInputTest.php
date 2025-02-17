<?php
/**
 * TrackingDetailsInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\TrackingDetailsInput;

/**
 * TrackingDetailsInputTest Class Doc Comment
 *
 * @category    Class
 * @description Tracking information input for Less-Than-Truckload (LTL) and Small Parcel Delivery (SPD) shipments.
 * @package     SpApi
 */
class TrackingDetailsInputTest extends TestCase
{

    private TrackingDetailsInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingDetailsInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingDetailsInput"
     */
    public function testTrackingDetailsInput()
    {
        $this->assertInstanceOf(TrackingDetailsInput::class, $this->model);
    }

    /**
     * Test attribute "ltl_tracking_detail"
     */
    public function testPropertyLtlTrackingDetail()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\LtlTrackingDetailInput();
        
        $this->model->setLtlTrackingDetail($testValue);
        $this->assertEquals($testValue, $this->model->getLtlTrackingDetail());
    }

    /**
     * Test attribute "spd_tracking_detail"
     */
    public function testPropertySpdTrackingDetail()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\SpdTrackingDetailInput();
        
        $this->model->setSpdTrackingDetail($testValue);
        $this->assertEquals($testValue, $this->model->getSpdTrackingDetail());
    }
}
