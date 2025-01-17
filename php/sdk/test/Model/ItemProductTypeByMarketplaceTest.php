<?php
/**
 * ItemProductTypeByMarketplaceTest
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
use OpenAPI\Client\Model\catalogItems\ItemProductTypeByMarketplace;

/**
 * ItemProductTypeByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Product type associated with the Amazon catalog item for the indicated Amazon marketplace.
 * @package     OpenAPI\Client
 */
class ItemProductTypeByMarketplaceTest extends TestCase
{

    private ItemProductTypeByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemProductTypeByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemProductTypeByMarketplace"
     */
    public function testItemProductTypeByMarketplace()
    {
        $this->assertInstanceOf(ItemProductTypeByMarketplace::class, $this->model);
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
     * Test attribute "product_type"
     */
    public function testPropertyProductType()
    {
        $testValue = 'test';
        
        $this->model->setProductType($testValue);
        $this->assertEquals($testValue, $this->model->getProductType());
    }
}
