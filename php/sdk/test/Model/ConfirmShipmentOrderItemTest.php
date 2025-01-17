<?php
/**
 * ConfirmShipmentOrderItemTest
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
use OpenAPI\Client\Model\orders\ConfirmShipmentOrderItem;

/**
 * ConfirmShipmentOrderItemTest Class Doc Comment
 *
 * @category    Class
 * @description A single order item.
 * @package     OpenAPI\Client
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
