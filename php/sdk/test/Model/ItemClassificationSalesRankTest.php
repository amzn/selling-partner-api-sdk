<?php
/**
 * ItemClassificationSalesRankTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\catalogItems\ItemClassificationSalesRank;

/**
 * ItemClassificationSalesRankTest Class Doc Comment
 *
 * @category    Class
 * @description Sales rank of an Amazon catalog item by classification.
 * @package     OpenAPI\Client
 */
class ItemClassificationSalesRankTest extends TestCase
{

    private ItemClassificationSalesRank $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemClassificationSalesRank();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemClassificationSalesRank"
     */
    public function testItemClassificationSalesRank()
    {
        $this->assertInstanceOf(ItemClassificationSalesRank::class, $this->model);
    }

    /**
     * Test attribute "classification_id"
     */
    public function testPropertyClassificationId()
    {
        $testValue = 'test';
        
        $this->model->setClassificationId($testValue);
        $this->assertEquals($testValue, $this->model->getClassificationId());
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
