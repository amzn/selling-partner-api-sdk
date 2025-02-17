<?php
/**
 * InvalidReturnItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\InvalidReturnItem;

/**
 * InvalidReturnItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item that is invalid for return.
 * @package     SpApi
 */
class InvalidReturnItemTest extends TestCase
{

    private InvalidReturnItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvalidReturnItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvalidReturnItem"
     */
    public function testInvalidReturnItem()
    {
        $this->assertInstanceOf(InvalidReturnItem::class, $this->model);
    }

    /**
     * Test attribute "seller_return_item_id"
     */
    public function testPropertySellerReturnItemId()
    {
        $testValue = 'test';
        
        $this->model->setSellerReturnItemId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerReturnItemId());
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
     * Test attribute "invalid_item_reason"
     */
    public function testPropertyInvalidItemReason()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\InvalidItemReason();
        
        $this->model->setInvalidItemReason($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidItemReason());
    }
}
