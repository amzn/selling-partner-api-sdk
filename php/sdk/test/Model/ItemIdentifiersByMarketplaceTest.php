<?php
/**
 * ItemIdentifiersByMarketplaceTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemIdentifiersByMarketplace;

/**
 * ItemIdentifiersByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Identifiers that are associated with the item in the Amazon catalog, grouped by &#x60;marketplaceId&#x60;.
 * @package     SpApi
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
