<?php
/**
 * VendorDetailsTest
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
use OpenAPI\Client\Model\vendor\shipments\VendorDetails;

/**
 * VendorDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Vendor Details as part of Label response.
 * @package     OpenAPI\Client
 */
class VendorDetailsTest extends TestCase
{

    private VendorDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VendorDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VendorDetails"
     */
    public function testVendorDetails()
    {
        $this->assertInstanceOf(VendorDetails::class, $this->model);
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "vendor_shipment_id"
     */
    public function testPropertyVendorShipmentId()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setVendorShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getVendorShipmentId());
    }
}
