<?php
/**
 * IdentifierTypeTest
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
use SpApi\Model\pricing\v0\IdentifierType;

/**
 * IdentifierTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies the identifiers used to uniquely identify an item.
 * @package     SpApi
 */
class IdentifierTypeTest extends TestCase
{

    private IdentifierType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IdentifierType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IdentifierType"
     */
    public function testIdentifierType()
    {
        $this->assertInstanceOf(IdentifierType::class, $this->model);
    }

    /**
     * Test attribute "marketplace_asin"
     */
    public function testPropertyMarketplaceAsin()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\ASINIdentifier();
        
        $this->model->setMarketplaceAsin($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceAsin());
    }

    /**
     * Test attribute "sku_identifier"
     */
    public function testPropertySkuIdentifier()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\SellerSKUIdentifier();
        
        $this->model->setSkuIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getSkuIdentifier());
    }
}
