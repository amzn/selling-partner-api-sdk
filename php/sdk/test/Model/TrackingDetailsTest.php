<?php
/**
 * TrackingDetailsTest
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
use SpApi\Model\awd\v2024_05_09\TrackingDetails;

/**
 * TrackingDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Tracking details for the shipment. If using SPD transportation, this can be for each case. If not using SPD transportation, this is a single tracking entry for the entire shipment.
 * @package     SpApi
 */
class TrackingDetailsTest extends TestCase
{

    private TrackingDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingDetails"
     */
    public function testTrackingDetails()
    {
        $this->assertInstanceOf(TrackingDetails::class, $this->model);
    }

    /**
     * Test attribute "carrier_code"
     */
    public function testPropertyCarrierCode()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\CarrierCode();
        
        $this->model->setCarrierCode($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCode());
    }

    /**
     * Test attribute "booking_id"
     */
    public function testPropertyBookingId()
    {
        $testValue = 'test';
        
        $this->model->setBookingId($testValue);
        $this->assertEquals($testValue, $this->model->getBookingId());
    }
}
