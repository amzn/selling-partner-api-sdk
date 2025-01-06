<?php
/**
 * ShippingLabelRequestTest
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
use OpenAPI\Client\Model\vendorDfShipping\ShippingLabelRequest;

/**
 * ShippingLabelRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the request payload for creating a shipping label, containing the purchase order number, selling party, ship from party, and a list of containers or packages in the shipment.
 * @package     OpenAPI\Client
 */
class ShippingLabelRequestTest extends TestCase
{

    private ShippingLabelRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingLabelRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingLabelRequest"
     */
    public function testShippingLabelRequest()
    {
        $this->assertInstanceOf(ShippingLabelRequest::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "containers"
     */
    public function testPropertyContainers()
    {
        $testValue = [];
        
        $this->model->setContainers($testValue);
        $this->assertEquals($testValue, $this->model->getContainers());
    }
}
