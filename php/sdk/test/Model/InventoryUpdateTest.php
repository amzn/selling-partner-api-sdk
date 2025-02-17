<?php
/**
 * InventoryUpdateTest
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
use SpApi\Model\vendor\df\inventory\v1\InventoryUpdate;

/**
 * InventoryUpdateTest Class Doc Comment
 *
 * @category    Class
 * @description Inventory details required to update some or all items for the requested warehouse.
 * @package     SpApi
 */
class InventoryUpdateTest extends TestCase
{

    private InventoryUpdate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryUpdate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryUpdate"
     */
    public function testInventoryUpdate()
    {
        $this->assertInstanceOf(InventoryUpdate::class, $this->model);
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\inventory\v1\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "is_full_update"
     */
    public function testPropertyIsFullUpdate()
    {
        $testValue = true;
        
        $this->model->setIsFullUpdate($testValue);
        $this->assertEquals($testValue, $this->model->getIsFullUpdate());
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
