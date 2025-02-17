<?php
/**
 * InvoiceItemTest
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
use SpApi\Model\vendor\df\payments\v1\InvoiceItem;

/**
 * InvoiceItemTest Class Doc Comment
 *
 * @category    Class
 * @description Provides the details of the items in this invoice.
 * @package     SpApi
 */
class InvoiceItemTest extends TestCase
{

    private InvoiceItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoiceItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoiceItem"
     */
    public function testInvoiceItem()
    {
        $this->assertInstanceOf(InvoiceItem::class, $this->model);
    }

    /**
     * Test attribute "item_sequence_number"
     */
    public function testPropertyItemSequenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setItemSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getItemSequenceNumber());
    }

    /**
     * Test attribute "buyer_product_identifier"
     */
    public function testPropertyBuyerProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setBuyerProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerProductIdentifier());
    }

    /**
     * Test attribute "vendor_product_identifier"
     */
    public function testPropertyVendorProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setVendorProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getVendorProductIdentifier());
    }

    /**
     * Test attribute "invoiced_quantity"
     */
    public function testPropertyInvoicedQuantity()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\ItemQuantity();
        
        $this->model->setInvoicedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getInvoicedQuantity());
    }

    /**
     * Test attribute "net_cost"
     */
    public function testPropertyNetCost()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\Money();
        
        $this->model->setNetCost($testValue);
        $this->assertEquals($testValue, $this->model->getNetCost());
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
     * Test attribute "vendor_order_number"
     */
    public function testPropertyVendorOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setVendorOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getVendorOrderNumber());
    }

    /**
     * Test attribute "hsn_code"
     */
    public function testPropertyHsnCode()
    {
        $testValue = 'test';
        
        $this->model->setHsnCode($testValue);
        $this->assertEquals($testValue, $this->model->getHsnCode());
    }

    /**
     * Test attribute "tax_details"
     */
    public function testPropertyTaxDetails()
    {
        $testValue = [];
        
        $this->model->setTaxDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTaxDetails());
    }

    /**
     * Test attribute "charge_details"
     */
    public function testPropertyChargeDetails()
    {
        $testValue = [];
        
        $this->model->setChargeDetails($testValue);
        $this->assertEquals($testValue, $this->model->getChargeDetails());
    }
}
