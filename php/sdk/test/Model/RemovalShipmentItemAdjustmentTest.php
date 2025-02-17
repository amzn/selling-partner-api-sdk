<?php
/**
 * RemovalShipmentItemAdjustmentTest
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
use SpApi\Model\finances\v0\RemovalShipmentItemAdjustment;

/**
 * RemovalShipmentItemAdjustmentTest Class Doc Comment
 *
 * @category    Class
 * @description Item-level information for a removal shipment item adjustment.
 * @package     SpApi
 */
class RemovalShipmentItemAdjustmentTest extends TestCase
{

    private RemovalShipmentItemAdjustment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RemovalShipmentItemAdjustment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RemovalShipmentItemAdjustment"
     */
    public function testRemovalShipmentItemAdjustment()
    {
        $this->assertInstanceOf(RemovalShipmentItemAdjustment::class, $this->model);
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
     * Test attribute "adjusted_quantity"
     */
    public function testPropertyAdjustedQuantity()
    {
        $testValue = 123;
        
        $this->model->setAdjustedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAdjustedQuantity());
    }

    /**
     * Test attribute "revenue_adjustment"
     */
    public function testPropertyRevenueAdjustment()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setRevenueAdjustment($testValue);
        $this->assertEquals($testValue, $this->model->getRevenueAdjustment());
    }

    /**
     * Test attribute "tax_amount_adjustment"
     */
    public function testPropertyTaxAmountAdjustment()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxAmountAdjustment($testValue);
        $this->assertEquals($testValue, $this->model->getTaxAmountAdjustment());
    }

    /**
     * Test attribute "tax_withheld_adjustment"
     */
    public function testPropertyTaxWithheldAdjustment()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxWithheldAdjustment($testValue);
        $this->assertEquals($testValue, $this->model->getTaxWithheldAdjustment());
    }
}
