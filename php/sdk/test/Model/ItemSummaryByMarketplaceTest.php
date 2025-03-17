<?php
/**
 * ItemSummaryByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemSummaryByMarketplace;

/**
 * ItemSummaryByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Information about an Amazon catalog item for the indicated &#x60;marketplaceId&#x60;.
 * @package     SpApi
 */
class ItemSummaryByMarketplaceTest extends TestCase
{

    private ItemSummaryByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemSummaryByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemSummaryByMarketplace"
     */
    public function testItemSummaryByMarketplace()
    {
        $this->assertInstanceOf(ItemSummaryByMarketplace::class, $this->model);
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
     * Test attribute "adult_product"
     */
    public function testPropertyAdultProduct()
    {
        $testValue = true;
        
        $this->model->setAdultProduct($testValue);
        $this->assertEquals($testValue, $this->model->getAdultProduct());
    }

    /**
     * Test attribute "autographed"
     */
    public function testPropertyAutographed()
    {
        $testValue = true;
        
        $this->model->setAutographed($testValue);
        $this->assertEquals($testValue, $this->model->getAutographed());
    }

    /**
     * Test attribute "brand"
     */
    public function testPropertyBrand()
    {
        $testValue = 'test';
        
        $this->model->setBrand($testValue);
        $this->assertEquals($testValue, $this->model->getBrand());
    }

    /**
     * Test attribute "browse_classification"
     */
    public function testPropertyBrowseClassification()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\ItemBrowseClassification();
        
        $this->model->setBrowseClassification($testValue);
        $this->assertEquals($testValue, $this->model->getBrowseClassification());
    }

    /**
     * Test attribute "color"
     */
    public function testPropertyColor()
    {
        $testValue = 'test';
        
        $this->model->setColor($testValue);
        $this->assertEquals($testValue, $this->model->getColor());
    }

    /**
     * Test attribute "contributors"
     */
    public function testPropertyContributors()
    {
        $testValue = [];
        
        $this->model->setContributors($testValue);
        $this->assertEquals($testValue, $this->model->getContributors());
    }

    /**
     * Test attribute "item_classification"
     */
    public function testPropertyItemClassification()
    {
        $enumInstance = new ItemSummaryByMarketplace();
        $allowedValues = $enumInstance->getItemClassificationAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setItemClassification($testValue);
        $this->assertEquals($testValue, $this->model->getItemClassification());
    }

    /**
     * Test attribute "item_name"
     */
    public function testPropertyItemName()
    {
        $testValue = 'test';
        
        $this->model->setItemName($testValue);
        $this->assertEquals($testValue, $this->model->getItemName());
    }

    /**
     * Test attribute "manufacturer"
     */
    public function testPropertyManufacturer()
    {
        $testValue = 'test';
        
        $this->model->setManufacturer($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturer());
    }

    /**
     * Test attribute "memorabilia"
     */
    public function testPropertyMemorabilia()
    {
        $testValue = true;
        
        $this->model->setMemorabilia($testValue);
        $this->assertEquals($testValue, $this->model->getMemorabilia());
    }

    /**
     * Test attribute "model_number"
     */
    public function testPropertyModelNumber()
    {
        $testValue = 'test';
        
        $this->model->setModelNumber($testValue);
        $this->assertEquals($testValue, $this->model->getModelNumber());
    }

    /**
     * Test attribute "package_quantity"
     */
    public function testPropertyPackageQuantity()
    {
        $testValue = 123;
        
        $this->model->setPackageQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getPackageQuantity());
    }

    /**
     * Test attribute "part_number"
     */
    public function testPropertyPartNumber()
    {
        $testValue = 'test';
        
        $this->model->setPartNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPartNumber());
    }

    /**
     * Test attribute "release_date"
     */
    public function testPropertyReleaseDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setReleaseDate($testValue);
        $this->assertEquals($testValue, $this->model->getReleaseDate());
    }

    /**
     * Test attribute "size"
     */
    public function testPropertySize()
    {
        $testValue = 'test';
        
        $this->model->setSize($testValue);
        $this->assertEquals($testValue, $this->model->getSize());
    }

    /**
     * Test attribute "style"
     */
    public function testPropertyStyle()
    {
        $testValue = 'test';
        
        $this->model->setStyle($testValue);
        $this->assertEquals($testValue, $this->model->getStyle());
    }

    /**
     * Test attribute "trade_in_eligible"
     */
    public function testPropertyTradeInEligible()
    {
        $testValue = true;
        
        $this->model->setTradeInEligible($testValue);
        $this->assertEquals($testValue, $this->model->getTradeInEligible());
    }

    /**
     * Test attribute "website_display_group"
     */
    public function testPropertyWebsiteDisplayGroup()
    {
        $testValue = 'test';
        
        $this->model->setWebsiteDisplayGroup($testValue);
        $this->assertEquals($testValue, $this->model->getWebsiteDisplayGroup());
    }

    /**
     * Test attribute "website_display_group_name"
     */
    public function testPropertyWebsiteDisplayGroupName()
    {
        $testValue = 'test';
        
        $this->model->setWebsiteDisplayGroupName($testValue);
        $this->assertEquals($testValue, $this->model->getWebsiteDisplayGroupName());
    }
}
