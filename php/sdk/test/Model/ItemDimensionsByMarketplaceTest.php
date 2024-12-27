<?php
/**
 * ItemDimensionsByMarketplaceTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\catalogitems\ItemDimensionsByMarketplace;

/**
 * ItemDimensionsByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Dimensions associated with the item in the Amazon catalog for the indicated Amazon marketplace.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\catalogitems\Dimensions();
        
        $this->model->setItem($testValue);
        $this->assertEquals($testValue, $this->model->getItem());
    }

    /**
     * Test attribute "package"
     */
    public function testPropertyPackage()
    {
        
        $testValue = new \OpenAPI\Client\Model\catalogitems\Dimensions();
        
        $this->model->setPackage($testValue);
        $this->assertEquals($testValue, $this->model->getPackage());
    }
}
