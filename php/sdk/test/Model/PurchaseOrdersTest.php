<?php
/**
 * PurchaseOrdersTest
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
use OpenAPI\Client\Model\vendor\shipments\PurchaseOrders;

/**
 * PurchaseOrdersTest Class Doc Comment
 *
 * @category    Class
 * @description Transport Request pickup date
 * @package     OpenAPI\Client
 */
class PurchaseOrdersTest extends TestCase
{

    private PurchaseOrders $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PurchaseOrders();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PurchaseOrders"
     */
    public function testPurchaseOrders()
    {
        $this->assertInstanceOf(PurchaseOrders::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "purchase_order_date"
     */
    public function testPropertyPurchaseOrderDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPurchaseOrderDate($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderDate());
    }

    /**
     * Test attribute "ship_window"
     */
    public function testPropertyShipWindow()
    {
        $testValue = 'test';
        
        $this->model->setShipWindow($testValue);
        $this->assertEquals($testValue, $this->model->getShipWindow());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
