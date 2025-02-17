<?php
/**
 * ItemDisplayGroupSalesRankTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemDisplayGroupSalesRank;

/**
 * ItemDisplayGroupSalesRankTest Class Doc Comment
 *
 * @category    Class
 * @description Sales rank of an Amazon catalog item by website display group.
 * @package     SpApi
 */
class ItemDisplayGroupSalesRankTest extends TestCase
{

    private ItemDisplayGroupSalesRank $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemDisplayGroupSalesRank();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemDisplayGroupSalesRank"
     */
    public function testItemDisplayGroupSalesRank()
    {
        $this->assertInstanceOf(ItemDisplayGroupSalesRank::class, $this->model);
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
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "link"
     */
    public function testPropertyLink()
    {
        $testValue = 'test';
        
        $this->model->setLink($testValue);
        $this->assertEquals($testValue, $this->model->getLink());
    }

    /**
     * Test attribute "rank"
     */
    public function testPropertyRank()
    {
        $testValue = 123;
        
        $this->model->setRank($testValue);
        $this->assertEquals($testValue, $this->model->getRank());
    }
}
