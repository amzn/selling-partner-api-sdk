<?php
/**
 * ItemVendorDetailsCategoryTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory;

/**
 * ItemVendorDetailsCategoryTest Class Doc Comment
 *
 * @category    Class
 * @description The product category or subcategory that is associated with an Amazon catalog item.
 * @package     SpApi
 */
class ItemVendorDetailsCategoryTest extends TestCase
{

    private ItemVendorDetailsCategory $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemVendorDetailsCategory();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemVendorDetailsCategory"
     */
    public function testItemVendorDetailsCategory()
    {
        $this->assertInstanceOf(ItemVendorDetailsCategory::class, $this->model);
    }

    /**
     * Test attribute "display_name"
     */
    public function testPropertyDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayName());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
