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
use SpApi\Model\vendor\orders\v1\OrderDetails;

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
     * Test attribute "purchase_order_date"
     */
    public function testPropertyPurchaseOrderDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPurchaseOrderDate($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderDate());
    }

    /**
     * Test attribute "purchase_order_changed_date"
     */
    public function testPropertyPurchaseOrderChangedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPurchaseOrderChangedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderChangedDate());
    }

    /**
     * Test attribute "purchase_order_state_changed_date"
     */
    public function testPropertyPurchaseOrderStateChangedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPurchaseOrderStateChangedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderStateChangedDate());
    }

    /**
     * Test attribute "purchase_order_type"
     */
    public function testPropertyPurchaseOrderType()
    {
        $enumInstance = new OrderDetails();
        $allowedValues = $enumInstance->getPurchaseOrderTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setPurchaseOrderType($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderType());
    }

    /**
     * Test attribute "import_details"
     */
    public function testPropertyImportDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\ImportDetails();
        
        $this->model->setImportDetails($testValue);
        $this->assertEquals($testValue, $this->model->getImportDetails());
    }

    /**
     * Test attribute "deal_code"
     */
    public function testPropertyDealCode()
    {
        $testValue = 'test';
        
        $this->model->setDealCode($testValue);
        $this->assertEquals($testValue, $this->model->getDealCode());
    }

    /**
     * Test attribute "payment_method"
     */
    public function testPropertyPaymentMethod()
    {
        $enumInstance = new OrderDetails();
        $allowedValues = $enumInstance->getPaymentMethodAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setPaymentMethod($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethod());
    }

    /**
     * Test attribute "buying_party"
     */
    public function testPropertyBuyingParty()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\PartyIdentification();
        
        $this->model->setBuyingParty($testValue);
        $this->assertEquals($testValue, $this->model->getBuyingParty());
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_to_party"
     */
    public function testPropertyShipToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\PartyIdentification();
        
        $this->model->setShipToParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipToParty());
    }

    /**
     * Test attribute "bill_to_party"
     */
    public function testPropertyBillToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\PartyIdentification();
        
        $this->model->setBillToParty($testValue);
        $this->assertEquals($testValue, $this->model->getBillToParty());
    }

    /**
     * Test attribute "ship_window"
     */
    public function testPropertyShipWindow()
    {
        $testValue = 'test';
        
        $this->model->setShipWindow($testValue);
        $this->assertEquals($testValue, $this->model->getShipWindow());
    }

    /**
     * Test attribute "delivery_window"
     */
    public function testPropertyDeliveryWindow()
    {
        $testValue = 'test';
        
        $this->model->setDeliveryWindow($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindow());
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
