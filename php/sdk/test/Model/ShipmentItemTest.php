<?php
/**
 * ShipmentItemTest
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
use SpApi\Model\finances\v0\ShipmentItem;

/**
 * ShipmentItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item of a shipment, refund, guarantee claim, or chargeback.
 * @package     SpApi
 */
class ShipmentItemTest extends TestCase
{

    private ShipmentItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentItem"
     */
    public function testShipmentItem()
    {
        $this->assertInstanceOf(ShipmentItem::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "order_item_id"
     */
    public function testPropertyOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItemId());
    }

    /**
     * Test attribute "order_adjustment_item_id"
     */
    public function testPropertyOrderAdjustmentItemId()
    {
        $testValue = 'test';
        
        $this->model->setOrderAdjustmentItemId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderAdjustmentItemId());
    }

    /**
     * Test attribute "quantity_shipped"
     */
    public function testPropertyQuantityShipped()
    {
        $testValue = 123;
        
        $this->model->setQuantityShipped($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityShipped());
    }

    /**
     * Test attribute "item_charge_list"
     */
    public function testPropertyItemChargeList()
    {
        $testValue = [];
        
        $this->model->setItemChargeList($testValue);
        $this->assertEquals($testValue, $this->model->getItemChargeList());
    }

    /**
     * Test attribute "item_charge_adjustment_list"
     */
    public function testPropertyItemChargeAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setItemChargeAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getItemChargeAdjustmentList());
    }

    /**
     * Test attribute "item_fee_list"
     */
    public function testPropertyItemFeeList()
    {
        $testValue = [];
        
        $this->model->setItemFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getItemFeeList());
    }

    /**
     * Test attribute "item_fee_adjustment_list"
     */
    public function testPropertyItemFeeAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setItemFeeAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getItemFeeAdjustmentList());
    }

    /**
     * Test attribute "item_tax_withheld_list"
     */
    public function testPropertyItemTaxWithheldList()
    {
        $testValue = [];
        
        $this->model->setItemTaxWithheldList($testValue);
        $this->assertEquals($testValue, $this->model->getItemTaxWithheldList());
    }

    /**
     * Test attribute "promotion_list"
     */
    public function testPropertyPromotionList()
    {
        $testValue = [];
        
        $this->model->setPromotionList($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionList());
    }

    /**
     * Test attribute "promotion_adjustment_list"
     */
    public function testPropertyPromotionAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setPromotionAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionAdjustmentList());
    }

    /**
     * Test attribute "cost_of_points_granted"
     */
    public function testPropertyCostOfPointsGranted()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setCostOfPointsGranted($testValue);
        $this->assertEquals($testValue, $this->model->getCostOfPointsGranted());
    }

    /**
     * Test attribute "cost_of_points_returned"
     */
    public function testPropertyCostOfPointsReturned()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setCostOfPointsReturned($testValue);
        $this->assertEquals($testValue, $this->model->getCostOfPointsReturned());
    }
}
