<?php
/**
 * AssociatedItemTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\AssociatedItem;

/**
 * AssociatedItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item that is associated with an order item. For example, a tire installation service that is purchased with tires.
 * @package     OpenAPI\Client
 */
class AssociatedItemTest extends TestCase
{

    private AssociatedItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AssociatedItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AssociatedItem"
     */
    public function testAssociatedItem()
    {
        $this->assertInstanceOf(AssociatedItem::class, $this->model);
    }

    /**
     * Test attribute "order_id"
     */
    public function testPropertyOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderId());
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
     * Test attribute "association_type"
     */
    public function testPropertyAssociationType()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\AssociationType();
        
        $this->model->setAssociationType($testValue);
        $this->assertEquals($testValue, $this->model->getAssociationType());
    }
}
