<?php
/**
 * FulfillmentShipmentPackageTest
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
use OpenAPI\Client\Model\fulfillment\outbound\FulfillmentShipmentPackage;

/**
 * FulfillmentShipmentPackageTest Class Doc Comment
 *
 * @category    Class
 * @description Package information for a shipment in a fulfillment order.
 * @package     OpenAPI\Client
 */
class FulfillmentShipmentPackageTest extends TestCase
{

    private FulfillmentShipmentPackage $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentShipmentPackage();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentShipmentPackage"
     */
    public function testFulfillmentShipmentPackage()
    {
        $this->assertInstanceOf(FulfillmentShipmentPackage::class, $this->model);
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
     * Test attribute "carrier_code"
     */
    public function testPropertyCarrierCode()
    {
        $testValue = 'test';
        
        $this->model->setCarrierCode($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCode());
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
     * Test attribute "estimated_arrival_date"
     */
    public function testPropertyEstimatedArrivalDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedArrivalDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedArrivalDate());
    }

    /**
     * Test attribute "locker_details"
     */
    public function testPropertyLockerDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\LockerDetails();
        
        $this->model->setLockerDetails($testValue);
        $this->assertEquals($testValue, $this->model->getLockerDetails());
    }

    /**
     * Test attribute "delivery_information"
     */
    public function testPropertyDeliveryInformation()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\DeliveryInformation();
        
        $this->model->setDeliveryInformation($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryInformation());
    }
}
