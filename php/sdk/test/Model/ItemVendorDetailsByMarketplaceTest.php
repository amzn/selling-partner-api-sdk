<?php
/**
 * ItemVendorDetailsByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsByMarketplace;

/**
 * ItemVendorDetailsByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description The vendor details that are associated with an Amazon catalog item for the specified &#x60;marketplaceId&#x60;.
 * @package     SpApi
 */
class ItemVendorDetailsByMarketplaceTest extends TestCase
{

    private ItemVendorDetailsByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemVendorDetailsByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemVendorDetailsByMarketplace"
     */
    public function testItemVendorDetailsByMarketplace()
    {
        $this->assertInstanceOf(ItemVendorDetailsByMarketplace::class, $this->model);
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
     * Test attribute "brand_code"
     */
    public function testPropertyBrandCode()
    {
        $testValue = 'test';
        
        $this->model->setBrandCode($testValue);
        $this->assertEquals($testValue, $this->model->getBrandCode());
    }

    /**
     * Test attribute "manufacturer_code"
     */
    public function testPropertyManufacturerCode()
    {
        $testValue = 'test';
        
        $this->model->setManufacturerCode($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturerCode());
    }

    /**
     * Test attribute "manufacturer_code_parent"
     */
    public function testPropertyManufacturerCodeParent()
    {
        $testValue = 'test';
        
        $this->model->setManufacturerCodeParent($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturerCodeParent());
    }

    /**
     * Test attribute "product_category"
     */
    public function testPropertyProductCategory()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory();
        
        $this->model->setProductCategory($testValue);
        $this->assertEquals($testValue, $this->model->getProductCategory());
    }

    /**
     * Test attribute "product_group"
     */
    public function testPropertyProductGroup()
    {
        $testValue = 'test';
        
        $this->model->setProductGroup($testValue);
        $this->assertEquals($testValue, $this->model->getProductGroup());
    }

    /**
     * Test attribute "product_subcategory"
     */
    public function testPropertyProductSubcategory()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory();
        
        $this->model->setProductSubcategory($testValue);
        $this->assertEquals($testValue, $this->model->getProductSubcategory());
    }

    /**
     * Test attribute "replenishment_category"
     */
    public function testPropertyReplenishmentCategory()
    {
        $enumInstance = new ItemVendorDetailsByMarketplace();
        $allowedValues = $enumInstance->getReplenishmentCategoryAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setReplenishmentCategory($testValue);
        $this->assertEquals($testValue, $this->model->getReplenishmentCategory());
    }
}
