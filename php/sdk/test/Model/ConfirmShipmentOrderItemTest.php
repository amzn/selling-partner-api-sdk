<?php
/**
 * ConfirmShipmentOrderItemTest
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
use SpApi\Model\orders\v0\ConfirmShipmentOrderItem;

/**
 * ConfirmShipmentOrderItemTest Class Doc Comment
 *
 * @category    Class
 * @description A single order item.
 * @package     SpApi
 */
class ConfirmShipmentOrderItemTest extends TestCase
{

    private ConfirmShipmentOrderItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmShipmentOrderItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmShipmentOrderItem"
     */
    public function testConfirmShipmentOrderItem()
    {
        $this->assertInstanceOf(ConfirmShipmentOrderItem::class, $this->model);
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
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "transparency_codes"
     */
    public function testPropertyTransparencyCodes()
    {
        $testValue = [];
        
        $this->model->setTransparencyCodes($testValue);
        $this->assertEquals($testValue, $this->model->getTransparencyCodes());
    }
}
