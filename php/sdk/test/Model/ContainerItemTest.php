<?php
/**
 * ContainerItemTest
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
use OpenAPI\Client\Model\vendor\shipments\ContainerItem;

/**
 * ContainerItemTest Class Doc Comment
 *
 * @category    Class
 * @description Carton/Pallet level details for the item.
 * @package     OpenAPI\Client
 */
class ContainerItemTest extends TestCase
{

    private ContainerItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContainerItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContainerItem"
     */
    public function testContainerItem()
    {
        $this->assertInstanceOf(ContainerItem::class, $this->model);
    }

    /**
     * Test attribute "item_reference"
     */
    public function testPropertyItemReference()
    {
        $testValue = 'test';
        
        $this->model->setItemReference($testValue);
        $this->assertEquals($testValue, $this->model->getItemReference());
    }

    /**
     * Test attribute "shipped_quantity"
     */
    public function testPropertyShippedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\ItemQuantity();
        
        $this->model->setShippedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getShippedQuantity());
    }

    /**
     * Test attribute "item_details"
     */
    public function testPropertyItemDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\ItemDetails();
        
        $this->model->setItemDetails($testValue);
        $this->assertEquals($testValue, $this->model->getItemDetails());
    }
}
