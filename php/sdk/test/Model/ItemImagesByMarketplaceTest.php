<?php
/**
 * ItemImagesByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemImagesByMarketplace;

/**
 * ItemImagesByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Images for an item in the Amazon catalog for the indicated Amazon marketplace.
 * @package     SpApi
 */
class ItemImagesByMarketplaceTest extends TestCase
{

    private ItemImagesByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemImagesByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemImagesByMarketplace"
     */
    public function testItemImagesByMarketplace()
    {
        $this->assertInstanceOf(ItemImagesByMarketplace::class, $this->model);
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
     * Test attribute "images"
     */
    public function testPropertyImages()
    {
        $testValue = [];
        
        $this->model->setImages($testValue);
        $this->assertEquals($testValue, $this->model->getImages());
    }
}
