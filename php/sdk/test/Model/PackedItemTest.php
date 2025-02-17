<?php
/**
 * PackedItemTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\PackedItem;

/**
 * PackedItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item that has been packed into a container for shipping.
 * @package     SpApi
 */
class PackedItemTest extends TestCase
{

    private PackedItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackedItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackedItem"
     */
    public function testPackedItem()
    {
        $this->assertInstanceOf(PackedItem::class, $this->model);
    }

    /**
     * Test attribute "item_sequence_number"
     */
    public function testPropertyItemSequenceNumber()
    {
        $testValue = 123;
        
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
     * Test attribute "piece_number"
     */
    public function testPropertyPieceNumber()
    {
        $testValue = 123;
        
        $this->model->setPieceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPieceNumber());
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
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\ItemQuantity();
        
        $this->model->setPackedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getPackedQuantity());
    }
}
