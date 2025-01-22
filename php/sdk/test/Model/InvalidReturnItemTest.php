<?php
/**
 * InvalidReturnItemTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\outbound\InvalidReturnItem;

/**
 * InvalidReturnItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item that is invalid for return.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\InvalidItemReason();
        
        $this->model->setInvalidItemReason($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidItemReason());
    }
}
