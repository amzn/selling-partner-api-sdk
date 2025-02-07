<?php
/**
 * InventoryItemTest
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
use OpenAPI\Client\Model\fba\inventory\v1\InventoryItem;

/**
 * InventoryItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item in the list of inventory to be added.
 * @package     OpenAPI\Client
 */
class InventoryItemTest extends TestCase
{

    private InventoryItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryItem"
     */
    public function testInventoryItem()
    {
        $this->assertInstanceOf(InventoryItem::class, $this->model);
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
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
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
}
