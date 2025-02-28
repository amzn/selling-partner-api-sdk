<?php
/**
 * SellerSKUIdentifierTest
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
use SpApi\Model\pricing\v0\SellerSKUIdentifier;

/**
 * SellerSKUIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description Schema to identify an item by MarketPlaceId, SellerId, and SellerSKU.
 * @package     SpApi
 */
class SellerSKUIdentifierTest extends TestCase
{

    private SellerSKUIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellerSKUIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellerSKUIdentifier"
     */
    public function testSellerSKUIdentifier()
    {
        $this->assertInstanceOf(SellerSKUIdentifier::class, $this->model);
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
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
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
}
