<?php
/**
 * InventorySummaryTest
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
use OpenAPI\Client\Model\awd\InventorySummary;

/**
 * InventorySummaryTest Class Doc Comment
 *
 * @category    Class
 * @description Summary of inventory per SKU.
 * @package     OpenAPI\Client
 */
class InventorySummaryTest extends TestCase
{

    private InventorySummary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventorySummary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventorySummary"
     */
    public function testInventorySummary()
    {
        $this->assertInstanceOf(InventorySummary::class, $this->model);
    }

    /**
     * Test attribute "expiration_details"
     */
    public function testPropertyExpirationDetails()
    {
        $testValue = [];
        
        $this->model->setExpirationDetails($testValue);
        $this->assertEquals($testValue, $this->model->getExpirationDetails());
    }

    /**
     * Test attribute "inventory_details"
     */
    public function testPropertyInventoryDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\awd\InventoryDetails();
        
        $this->model->setInventoryDetails($testValue);
        $this->assertEquals($testValue, $this->model->getInventoryDetails());
    }

    /**
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "total_inbound_quantity"
     */
    public function testPropertyTotalInboundQuantity()
    {
        
        $testValue = new int();
        
        $this->model->setTotalInboundQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getTotalInboundQuantity());
    }

    /**
     * Test attribute "total_onhand_quantity"
     */
    public function testPropertyTotalOnhandQuantity()
    {
        
        $testValue = new int();
        
        $this->model->setTotalOnhandQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getTotalOnhandQuantity());
    }
}
