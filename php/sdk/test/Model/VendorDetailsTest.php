<?php
/**
 * VendorDetailsTest
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
use SpApi\Model\vendor\shipments\v1\VendorDetails;

/**
 * VendorDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Vendor Details as part of Label response.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "vendor_shipment_identifier"
     */
    public function testPropertyVendorShipmentIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setVendorShipmentIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getVendorShipmentIdentifier());
    }
}
