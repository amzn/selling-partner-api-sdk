<?php
/**
 * FulfillmentPreviewItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentPreviewItem;

/**
 * FulfillmentPreviewItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for a shipment in a fulfillment order preview.
 * @package     SpApi
 */
class FulfillmentPreviewItemTest extends TestCase
{

    private FulfillmentPreviewItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentPreviewItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentPreviewItem"
     */
    public function testFulfillmentPreviewItem()
    {
        $this->assertInstanceOf(FulfillmentPreviewItem::class, $this->model);
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
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "seller_fulfillment_order_item_id"
     */
    public function testPropertySellerFulfillmentOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setSellerFulfillmentOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerFulfillmentOrderItemId());
    }

    /**
     * Test attribute "estimated_shipping_weight"
     */
    public function testPropertyEstimatedShippingWeight()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Weight();
        
        $this->model->setEstimatedShippingWeight($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedShippingWeight());
    }

    /**
     * Test attribute "shipping_weight_calculation_method"
     */
    public function testPropertyShippingWeightCalculationMethod()
    {
        $enumInstance = new FulfillmentPreviewItem();
        $allowedValues = $enumInstance->getShippingWeightCalculationMethodAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setShippingWeightCalculationMethod($testValue);
        $this->assertEquals($testValue, $this->model->getShippingWeightCalculationMethod());
    }
}
