<?php
/**
 * StatusUpdateDetailsTest
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
use OpenAPI\Client\Model\vendor.df.shipping\StatusUpdateDetails;

/**
 * StatusUpdateDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details for the shipment status update given by the vendor for the specific package.
 * @package     OpenAPI\Client
 */
class StatusUpdateDetailsTest extends TestCase
{

    private StatusUpdateDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StatusUpdateDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StatusUpdateDetails"
     */
    public function testStatusUpdateDetails()
    {
        $this->assertInstanceOf(StatusUpdateDetails::class, $this->model);
    }

    /**
     * Test attribute "tracking_number"
     */
    public function testPropertyTrackingNumber()
    {
        $testValue = 'test';
        
        $this->model->setTrackingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingNumber());
    }

    /**
     * Test attribute "status_code"
     */
    public function testPropertyStatusCode()
    {
        $testValue = 'test';
        
        $this->model->setStatusCode($testValue);
        $this->assertEquals($testValue, $this->model->getStatusCode());
    }

    /**
     * Test attribute "reason_code"
     */
    public function testPropertyReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCode());
    }

    /**
     * Test attribute "status_date_time"
     */
    public function testPropertyStatusDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStatusDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getStatusDateTime());
    }

    /**
     * Test attribute "status_location_address"
     */
    public function testPropertyStatusLocationAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\Address();
        
        $this->model->setStatusLocationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getStatusLocationAddress());
    }

    /**
     * Test attribute "shipment_schedule"
     */
    public function testPropertyShipmentSchedule()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\ShipmentSchedule();
        
        $this->model->setShipmentSchedule($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentSchedule());
    }
}
