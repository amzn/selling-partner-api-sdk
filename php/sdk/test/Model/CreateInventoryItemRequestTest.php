<?php
/**
 * CreateInventoryItemRequestTest
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
use SpApi\Model\fba\inventory\v1\CreateInventoryItemRequest;

/**
 * CreateInventoryItemRequestTest Class Doc Comment
 *
 * @category    Class
 * @description An item to be created in the inventory.
 * @package     SpApi
 */
class CreateInventoryItemRequestTest extends TestCase
{

    private CreateInventoryItemRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInventoryItemRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInventoryItemRequest"
     */
    public function testCreateInventoryItemRequest()
    {
        $this->assertInstanceOf(CreateInventoryItemRequest::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
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
     * Test attribute "product_name"
     */
    public function testPropertyProductName()
    {
        $testValue = 'test';
        
        $this->model->setProductName($testValue);
        $this->assertEquals($testValue, $this->model->getProductName());
    }
}
