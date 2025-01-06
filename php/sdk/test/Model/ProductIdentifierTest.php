<?php
/**
 * ProductIdentifierTest
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
use OpenAPI\Client\Model\fulfillmentOutbound\ProductIdentifier;

/**
 * ProductIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description Product identifier input that locates a product for MCF.
 * @package     OpenAPI\Client
 */
class ProductIdentifierTest extends TestCase
{

    private ProductIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductIdentifier"
     */
    public function testProductIdentifier()
    {
        $this->assertInstanceOf(ProductIdentifier::class, $this->model);
    }

    /**
     * Test attribute "merchant_sku"
     */
    public function testPropertyMerchantSku()
    {
        $testValue = 'test';
        
        $this->model->setMerchantSku($testValue);
        $this->assertEquals($testValue, $this->model->getMerchantSku());
    }
}
