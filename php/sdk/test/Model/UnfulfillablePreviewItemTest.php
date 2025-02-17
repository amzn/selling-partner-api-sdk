<?php
/**
 * UnfulfillablePreviewItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\UnfulfillablePreviewItem;

/**
 * UnfulfillablePreviewItemTest Class Doc Comment
 *
 * @category    Class
 * @description Information about unfulfillable items in a fulfillment order preview.
 * @package     SpApi
 */
class UnfulfillablePreviewItemTest extends TestCase
{

    private UnfulfillablePreviewItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnfulfillablePreviewItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnfulfillablePreviewItem"
     */
    public function testUnfulfillablePreviewItem()
    {
        $this->assertInstanceOf(UnfulfillablePreviewItem::class, $this->model);
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
     * Test attribute "item_unfulfillable_reasons"
     */
    public function testPropertyItemUnfulfillableReasons()
    {
        $testValue = [];
        
        $this->model->setItemUnfulfillableReasons($testValue);
        $this->assertEquals($testValue, $this->model->getItemUnfulfillableReasons());
    }
}
