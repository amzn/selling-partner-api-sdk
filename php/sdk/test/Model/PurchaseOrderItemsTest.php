<?php
/**
 * PurchaseOrderItemsTest
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
use SpApi\Model\vendor\shipments\v1\PurchaseOrderItems;

/**
 * PurchaseOrderItemsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the item being shipped.
 * @package     SpApi
 */
class PurchaseOrderItemsTest extends TestCase
{

    private PurchaseOrderItems $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PurchaseOrderItems();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PurchaseOrderItems"
     */
    public function testPurchaseOrderItems()
    {
        $this->assertInstanceOf(PurchaseOrderItems::class, $this->model);
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
     * Test attribute "shipped_quantity"
     */
    public function testPropertyShippedQuantity()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\ItemQuantity();
        
        $this->model->setShippedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getShippedQuantity());
    }

    /**
     * Test attribute "maximum_retail_price"
     */
    public function testPropertyMaximumRetailPrice()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Money();
        
        $this->model->setMaximumRetailPrice($testValue);
        $this->assertEquals($testValue, $this->model->getMaximumRetailPrice());
    }
}
