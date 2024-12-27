<?php
/**
 * CreateContainerLabelRequestTest
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
use OpenAPI\Client\Model\vendor.df.shipping\CreateContainerLabelRequest;

/**
 * CreateContainerLabelRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the createContainerLabel operation.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $enumInstance = new \OpenAPI\Client\Model\vendor.df.shipping\CarrierId();
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
