<?php
/**
 * ItemBrowseClassificationsByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemBrowseClassificationsByMarketplace;

/**
 * ItemBrowseClassificationsByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Classifications (browse nodes) associated with the item in the Amazon catalog for the indicated Amazon marketplace.
 * @package     SpApi
 */
class ItemBrowseClassificationsByMarketplaceTest extends TestCase
{

    private ItemBrowseClassificationsByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemBrowseClassificationsByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemBrowseClassificationsByMarketplace"
     */
    public function testItemBrowseClassificationsByMarketplace()
    {
        $this->assertInstanceOf(ItemBrowseClassificationsByMarketplace::class, $this->model);
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
     * Test attribute "classifications"
     */
    public function testPropertyClassifications()
    {
        $testValue = [];
        
        $this->model->setClassifications($testValue);
        $this->assertEquals($testValue, $this->model->getClassifications());
    }
}
