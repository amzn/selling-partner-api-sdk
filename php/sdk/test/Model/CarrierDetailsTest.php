<?php
/**
 * CarrierDetailsTest
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
use OpenAPI\Client\Model\vendorShipments\CarrierDetails;

/**
 * CarrierDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the carrier details and their contact informations
 * @package     OpenAPI\Client
 */
class CarrierDetailsTest extends TestCase
{

    private CarrierDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierDetails"
     */
    public function testCarrierDetails()
    {
        $this->assertInstanceOf(CarrierDetails::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "code"
     */
    public function testPropertyCode()
    {
        $testValue = 'test';
        
        $this->model->setCode($testValue);
        $this->assertEquals($testValue, $this->model->getCode());
    }

    /**
     * Test attribute "phone"
     */
    public function testPropertyPhone()
    {
        $testValue = 'test';
        
        $this->model->setPhone($testValue);
        $this->assertEquals($testValue, $this->model->getPhone());
    }

    /**
     * Test attribute "email"
     */
    public function testPropertyEmail()
    {
        $testValue = 'test';
        
        $this->model->setEmail($testValue);
        $this->assertEquals($testValue, $this->model->getEmail());
    }

    /**
     * Test attribute "shipment_reference_number"
     */
    public function testPropertyShipmentReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setShipmentReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentReferenceNumber());
    }
}
