<?php
/**
 * PackedItemsTest
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
use SpApi\Model\vendor\shipments\v1\PackedItems;

/**
 * PackedItemsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the item being shipped.
 * @package     SpApi
 */
class PackedItemsTest extends TestCase
{

    private PackedItems $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackedItems();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackedItems"
     */
    public function testPackedItems()
    {
        $this->assertInstanceOf(PackedItems::class, $this->model);
    }

    /**
     * Test attribute "item_sequence_number"
     */
    public function testPropertyItemSequenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setItemSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getItemSequenceNumber());
    }

    /**
     * Test attribute "buyer_product_identifier"
     */
    public function testPropertyBuyerProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setBuyerProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerProductIdentifier());
    }

    /**
     * Test attribute "vendor_product_identifier"
     */
    public function testPropertyVendorProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setVendorProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getVendorProductIdentifier());
    }

    /**
     * Test attribute "packed_quantity"
     */
    public function testPropertyPackedQuantity()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\ItemQuantity();
        
        $this->model->setPackedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getPackedQuantity());
    }

    /**
     * Test attribute "item_details"
     */
    public function testPropertyItemDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\PackageItemDetails();
        
        $this->model->setItemDetails($testValue);
        $this->assertEquals($testValue, $this->model->getItemDetails());
    }
}
