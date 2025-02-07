<?php
/**
 * UnmanifestedCarrierInformationTest
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
use OpenAPI\Client\Model\shipping\v2\UnmanifestedCarrierInformation;

/**
 * UnmanifestedCarrierInformationTest Class Doc Comment
 *
 * @category    Class
 * @description UnmanifestedCarrierInformation like carrierId CarrierName and Location
 * @package     OpenAPI\Client
 */
class UnmanifestedCarrierInformationTest extends TestCase
{

    private UnmanifestedCarrierInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnmanifestedCarrierInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnmanifestedCarrierInformation"
     */
    public function testUnmanifestedCarrierInformation()
    {
        $this->assertInstanceOf(UnmanifestedCarrierInformation::class, $this->model);
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }

    /**
     * Test attribute "unmanifested_shipment_location_list"
     */
    public function testPropertyUnmanifestedShipmentLocationList()
    {
        $testValue = [];
        
        $this->model->setUnmanifestedShipmentLocationList($testValue);
        $this->assertEquals($testValue, $this->model->getUnmanifestedShipmentLocationList());
    }
}
