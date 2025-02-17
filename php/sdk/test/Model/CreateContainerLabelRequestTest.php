<?php
/**
 * CreateContainerLabelRequestTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\CreateContainerLabelRequest;

/**
 * CreateContainerLabelRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;createContainerLabel&#x60; operation.
 * @package     SpApi
 */
class CreateContainerLabelRequestTest extends TestCase
{

    private CreateContainerLabelRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateContainerLabelRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateContainerLabelRequest"
     */
    public function testCreateContainerLabelRequest()
    {
        $this->assertInstanceOf(CreateContainerLabelRequest::class, $this->model);
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $enumInstance = new \SpApi\Model\vendor\df\shipping\v2021_12_28\CarrierId();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
    }

    /**
     * Test attribute "vendor_container_id"
     */
    public function testPropertyVendorContainerId()
    {
        $testValue = 'test';
        
        $this->model->setVendorContainerId($testValue);
        $this->assertEquals($testValue, $this->model->getVendorContainerId());
    }

    /**
     * Test attribute "packages"
     */
    public function testPropertyPackages()
    {
        $testValue = [];
        
        $this->model->setPackages($testValue);
        $this->assertEquals($testValue, $this->model->getPackages());
    }
}
