<?php
/**
 * ItemDetailsTest
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
use SpApi\Model\vendor\df\inventory\v1\ItemDetails;

/**
 * ItemDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Updated inventory details for an item.
 * @package     SpApi
 */
class ItemDetailsTest extends TestCase
{

    private ItemDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemDetails"
     */
    public function testItemDetails()
    {
        $this->assertInstanceOf(ItemDetails::class, $this->model);
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
     * Test attribute "available_quantity"
     */
    public function testPropertyAvailableQuantity()
    {
        
        $testValue = new \SpApi\Model\vendor\df\inventory\v1\ItemQuantity();
        
        $this->model->setAvailableQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableQuantity());
    }

    /**
     * Test attribute "is_obsolete"
     */
    public function testPropertyIsObsolete()
    {
        $testValue = true;
        
        $this->model->setIsObsolete($testValue);
        $this->assertEquals($testValue, $this->model->getIsObsolete());
    }
}
