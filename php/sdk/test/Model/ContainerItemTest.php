<?php
/**
 * ContainerItemTest
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
use SpApi\Model\vendor\shipments\v1\ContainerItem;

/**
 * ContainerItemTest Class Doc Comment
 *
 * @category    Class
 * @description Carton/Pallet level details for the item.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\ItemQuantity();
        
        $this->model->setShippedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getShippedQuantity());
    }

    /**
     * Test attribute "item_details"
     */
    public function testPropertyItemDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\ItemDetails();
        
        $this->model->setItemDetails($testValue);
        $this->assertEquals($testValue, $this->model->getItemDetails());
    }
}
