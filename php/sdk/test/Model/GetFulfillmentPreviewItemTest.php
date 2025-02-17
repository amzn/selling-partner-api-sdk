<?php
/**
 * GetFulfillmentPreviewItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentPreviewItem;

/**
 * GetFulfillmentPreviewItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for a fulfillment order preview.
 * @package     SpApi
 */
class GetFulfillmentPreviewItemTest extends TestCase
{

    private GetFulfillmentPreviewItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFulfillmentPreviewItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFulfillmentPreviewItem"
     */
    public function testGetFulfillmentPreviewItem()
    {
        $this->assertInstanceOf(GetFulfillmentPreviewItem::class, $this->model);
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
     * Test attribute "per_unit_declared_value"
     */
    public function testPropertyPerUnitDeclaredValue()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setPerUnitDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getPerUnitDeclaredValue());
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
}
