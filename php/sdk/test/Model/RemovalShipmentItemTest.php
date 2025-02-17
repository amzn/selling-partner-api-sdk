<?php
/**
 * RemovalShipmentItemTest
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
use SpApi\Model\finances\v0\RemovalShipmentItem;

/**
 * RemovalShipmentItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item-level information for a removal shipment.
 * @package     SpApi
 */
class RemovalShipmentItemTest extends TestCase
{

    private RemovalShipmentItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RemovalShipmentItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RemovalShipmentItem"
     */
    public function testRemovalShipmentItem()
    {
        $this->assertInstanceOf(RemovalShipmentItem::class, $this->model);
    }

    /**
     * Test attribute "removal_shipment_item_id"
     */
    public function testPropertyRemovalShipmentItemId()
    {
        $testValue = 'test';
        
        $this->model->setRemovalShipmentItemId($testValue);
        $this->assertEquals($testValue, $this->model->getRemovalShipmentItemId());
    }

    /**
     * Test attribute "tax_collection_model"
     */
    public function testPropertyTaxCollectionModel()
    {
        $testValue = 'test';
        
        $this->model->setTaxCollectionModel($testValue);
        $this->assertEquals($testValue, $this->model->getTaxCollectionModel());
    }

    /**
     * Test attribute "fulfillment_network_sku"
     */
    public function testPropertyFulfillmentNetworkSku()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentNetworkSku($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentNetworkSku());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "revenue"
     */
    public function testPropertyRevenue()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getRevenue());
    }

    /**
     * Test attribute "fee_amount"
     */
    public function testPropertyFeeAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setFeeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getFeeAmount());
    }

    /**
     * Test attribute "tax_amount"
     */
    public function testPropertyTaxAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTaxAmount());
    }

    /**
     * Test attribute "tax_withheld"
     */
    public function testPropertyTaxWithheld()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxWithheld($testValue);
        $this->assertEquals($testValue, $this->model->getTaxWithheld());
    }
}
