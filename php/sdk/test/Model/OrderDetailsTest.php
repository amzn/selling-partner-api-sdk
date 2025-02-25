<?php
/**
 * OrderDetailsTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\OrderDetails;

/**
 * OrderDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of an order.
 * @package     SpApi
 */
class OrderDetailsTest extends TestCase
{

    private OrderDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderDetails"
     */
    public function testOrderDetails()
    {
        $this->assertInstanceOf(OrderDetails::class, $this->model);
    }

    /**
     * Test attribute "customer_order_number"
     */
    public function testPropertyCustomerOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setCustomerOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerOrderNumber());
    }

    /**
     * Test attribute "order_date"
     */
    public function testPropertyOrderDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setOrderDate($testValue);
        $this->assertEquals($testValue, $this->model->getOrderDate());
    }

    /**
     * Test attribute "order_status"
     */
    public function testPropertyOrderStatus()
    {
        $enumInstance = new OrderDetails();
        $allowedValues = $enumInstance->getOrderStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setOrderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getOrderStatus());
    }

    /**
     * Test attribute "shipment_details"
     */
    public function testPropertyShipmentDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\ShipmentDetails();
        
        $this->model->setShipmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentDetails());
    }

    /**
     * Test attribute "tax_total"
     */
    public function testPropertyTaxTotal()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\TaxItemDetails();
        
        $this->model->setTaxTotal($testValue);
        $this->assertEquals($testValue, $this->model->getTaxTotal());
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "ship_to_party"
     */
    public function testPropertyShipToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\Address();
        
        $this->model->setShipToParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipToParty());
    }

    /**
     * Test attribute "bill_to_party"
     */
    public function testPropertyBillToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\PartyIdentification();
        
        $this->model->setBillToParty($testValue);
        $this->assertEquals($testValue, $this->model->getBillToParty());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
