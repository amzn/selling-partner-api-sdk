<?php
/**
 * PackageTrackingDetailsTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\PackageTrackingDetails;

/**
 * PackageTrackingDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Tracking details of package
 * @package     SpApi
 */
class PackageTrackingDetailsTest extends TestCase
{

    private PackageTrackingDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageTrackingDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageTrackingDetails"
     */
    public function testPackageTrackingDetails()
    {
        $this->assertInstanceOf(PackageTrackingDetails::class, $this->model);
    }

    /**
     * Test attribute "package_number"
     */
    public function testPropertyPackageNumber()
    {
        $testValue = 123;
        
        $this->model->setPackageNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPackageNumber());
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
     * Test attribute "customer_tracking_link"
     */
    public function testPropertyCustomerTrackingLink()
    {
        $testValue = 'test';
        
        $this->model->setCustomerTrackingLink($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerTrackingLink());
    }

    /**
     * Test attribute "carrier_code"
     */
    public function testPropertyCarrierCode()
    {
        $testValue = 'test';
        
        $this->model->setCarrierCode($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCode());
    }

    /**
     * Test attribute "carrier_phone_number"
     */
    public function testPropertyCarrierPhoneNumber()
    {
        $testValue = 'test';
        
        $this->model->setCarrierPhoneNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierPhoneNumber());
    }

    /**
     * Test attribute "carrier_url"
     */
    public function testPropertyCarrierUrl()
    {
        $testValue = 'test';
        
        $this->model->setCarrierUrl($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierUrl());
    }

    /**
     * Test attribute "ship_date"
     */
    public function testPropertyShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getShipDate());
    }

    /**
     * Test attribute "estimated_arrival_date"
     */
    public function testPropertyEstimatedArrivalDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedArrivalDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedArrivalDate());
    }

    /**
     * Test attribute "ship_to_address"
     */
    public function testPropertyShipToAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress();
        
        $this->model->setShipToAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipToAddress());
    }

    /**
     * Test attribute "current_status"
     */
    public function testPropertyCurrentStatus()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\CurrentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCurrentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getCurrentStatus());
    }

    /**
     * Test attribute "current_status_description"
     */
    public function testPropertyCurrentStatusDescription()
    {
        $testValue = 'test';
        
        $this->model->setCurrentStatusDescription($testValue);
        $this->assertEquals($testValue, $this->model->getCurrentStatusDescription());
    }

    /**
     * Test attribute "delivery_window"
     */
    public function testPropertyDeliveryWindow()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange();
        
        $this->model->setDeliveryWindow($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindow());
    }

    /**
     * Test attribute "signed_for_by"
     */
    public function testPropertySignedForBy()
    {
        $testValue = 'test';
        
        $this->model->setSignedForBy($testValue);
        $this->assertEquals($testValue, $this->model->getSignedForBy());
    }

    /**
     * Test attribute "additional_location_info"
     */
    public function testPropertyAdditionalLocationInfo()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\AdditionalLocationInfo();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAdditionalLocationInfo($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalLocationInfo());
    }

    /**
     * Test attribute "tracking_events"
     */
    public function testPropertyTrackingEvents()
    {
        $testValue = [];
        
        $this->model->setTrackingEvents($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingEvents());
    }
}
