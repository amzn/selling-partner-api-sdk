<?php
/**
 * ItemSalesRanksByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemSalesRanksByMarketplace;

/**
 * ItemSalesRanksByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Sales ranks of an Amazon catalog item, grouped by &#x60;marketplaceId&#x60;.
 * @package     SpApi
 */
class ItemSalesRanksByMarketplaceTest extends TestCase
{

    private ItemSalesRanksByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemSalesRanksByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemSalesRanksByMarketplace"
     */
    public function testItemSalesRanksByMarketplace()
    {
        $this->assertInstanceOf(ItemSalesRanksByMarketplace::class, $this->model);
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
     * Test attribute "classification_ranks"
     */
    public function testPropertyClassificationRanks()
    {
        $testValue = [];
        
        $this->model->setClassificationRanks($testValue);
        $this->assertEquals($testValue, $this->model->getClassificationRanks());
    }

    /**
     * Test attribute "display_group_ranks"
     */
    public function testPropertyDisplayGroupRanks()
    {
        $testValue = [];
        
        $this->model->setDisplayGroupRanks($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayGroupRanks());
    }
}
