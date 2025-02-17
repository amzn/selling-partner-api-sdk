<?php
/**
 * ItemDimensionsByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemDimensionsByMarketplace;

/**
 * ItemDimensionsByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Dimensions associated with the item in the Amazon catalog for the indicated Amazon marketplace.
 * @package     SpApi
 */
class ItemDimensionsByMarketplaceTest extends TestCase
{

    private ItemDimensionsByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemDimensionsByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemDimensionsByMarketplace"
     */
    public function testItemDimensionsByMarketplace()
    {
        $this->assertInstanceOf(ItemDimensionsByMarketplace::class, $this->model);
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
     * Test attribute "item"
     */
    public function testPropertyItem()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Dimensions();
        
        $this->model->setItem($testValue);
        $this->assertEquals($testValue, $this->model->getItem());
    }

    /**
     * Test attribute "package"
     */
    public function testPropertyPackage()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Dimensions();
        
        $this->model->setPackage($testValue);
        $this->assertEquals($testValue, $this->model->getPackage());
    }
}
