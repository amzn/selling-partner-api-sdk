<?php
/**
 * FulfillmentShipmentItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentShipmentItem;

/**
 * FulfillmentShipmentItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for a shipment in a fulfillment order.
 * @package     SpApi
 */
class FulfillmentShipmentItemTest extends TestCase
{

    private FulfillmentShipmentItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentShipmentItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentShipmentItem"
     */
    public function testFulfillmentShipmentItem()
    {
        $this->assertInstanceOf(FulfillmentShipmentItem::class, $this->model);
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
     * Test attribute "seller_fulfillment_order_item_id"
     */
    public function testPropertySellerFulfillmentOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setSellerFulfillmentOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerFulfillmentOrderItemId());
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
     * Test attribute "package_number"
     */
    public function testPropertyPackageNumber()
    {
        $testValue = 123;
        
        $this->model->setPackageNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPackageNumber());
    }

    /**
     * Test attribute "serial_number"
     */
    public function testPropertySerialNumber()
    {
        $testValue = 'test';
        
        $this->model->setSerialNumber($testValue);
        $this->assertEquals($testValue, $this->model->getSerialNumber());
    }

    /**
     * Test attribute "manufacturer_lot_codes"
     */
    public function testPropertyManufacturerLotCodes()
    {
        $testValue = [];
        
        $this->model->setManufacturerLotCodes($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturerLotCodes());
    }
}
