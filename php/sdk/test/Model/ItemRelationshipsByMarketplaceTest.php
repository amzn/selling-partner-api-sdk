<?php
/**
 * ItemRelationshipsByMarketplaceTest
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
use OpenAPI\Client\Model\catalogItems\ItemRelationshipsByMarketplace;

/**
 * ItemRelationshipsByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Relationship details for the Amazon catalog item for the indicated Amazon marketplace.
 * @package     OpenAPI\Client
 */
class ItemRelationshipsByMarketplaceTest extends TestCase
{

    private ItemRelationshipsByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemRelationshipsByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemRelationshipsByMarketplace"
     */
    public function testItemRelationshipsByMarketplace()
    {
        $this->assertInstanceOf(ItemRelationshipsByMarketplace::class, $this->model);
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
     * Test attribute "relationships"
     */
    public function testPropertyRelationships()
    {
        $testValue = [];
        
        $this->model->setRelationships($testValue);
        $this->assertEquals($testValue, $this->model->getRelationships());
    }
}
