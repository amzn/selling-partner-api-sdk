<?php
/**
 * ItemIdentifiersByMarketplaceTest
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
use OpenAPI\Client\Model\catalogItems\v2022_04_01\ItemIdentifiersByMarketplace;

/**
 * ItemIdentifiersByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace.
 * @package     OpenAPI\Client
 */
class ItemIdentifiersByMarketplaceTest extends TestCase
{

    private ItemIdentifiersByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemIdentifiersByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemIdentifiersByMarketplace"
     */
    public function testItemIdentifiersByMarketplace()
    {
        $this->assertInstanceOf(ItemIdentifiersByMarketplace::class, $this->model);
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
     * Test attribute "identifiers"
     */
    public function testPropertyIdentifiers()
    {
        $testValue = [];
        
        $this->model->setIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifiers());
    }
}
