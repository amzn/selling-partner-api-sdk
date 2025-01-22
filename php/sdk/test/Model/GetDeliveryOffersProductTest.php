<?php
/**
 * GetDeliveryOffersProductTest
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
use OpenAPI\Client\Model\fulfillment\outbound\GetDeliveryOffersProduct;

/**
 * GetDeliveryOffersProductTest Class Doc Comment
 *
 * @category    Class
 * @description The product details for the delivery offer.
 * @package     OpenAPI\Client
 */
class GetDeliveryOffersProductTest extends TestCase
{

    private GetDeliveryOffersProduct $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDeliveryOffersProduct();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDeliveryOffersProduct"
     */
    public function testGetDeliveryOffersProduct()
    {
        $this->assertInstanceOf(GetDeliveryOffersProduct::class, $this->model);
    }

    /**
     * Test attribute "product_identifier"
     */
    public function testPropertyProductIdentifier()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\ProductIdentifier();
        
        $this->model->setProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getProductIdentifier());
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\Amount();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
