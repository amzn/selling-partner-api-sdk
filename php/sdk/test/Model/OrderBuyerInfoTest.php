<?php
/**
 * OrderBuyerInfoTest
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
use OpenAPI\Client\Model\orders\v0\OrderBuyerInfo;

/**
 * OrderBuyerInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Buyer information for an order.
 * @package     OpenAPI\Client
 */
class OrderBuyerInfoTest extends TestCase
{

    private OrderBuyerInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderBuyerInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderBuyerInfo"
     */
    public function testOrderBuyerInfo()
    {
        $this->assertInstanceOf(OrderBuyerInfo::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "buyer_email"
     */
    public function testPropertyBuyerEmail()
    {
        $testValue = 'test';
        
        $this->model->setBuyerEmail($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerEmail());
    }

    /**
     * Test attribute "buyer_name"
     */
    public function testPropertyBuyerName()
    {
        $testValue = 'test';
        
        $this->model->setBuyerName($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerName());
    }

    /**
     * Test attribute "buyer_county"
     */
    public function testPropertyBuyerCounty()
    {
        $testValue = 'test';
        
        $this->model->setBuyerCounty($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerCounty());
    }

    /**
     * Test attribute "buyer_tax_info"
     */
    public function testPropertyBuyerTaxInfo()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\v0\BuyerTaxInfo();
        
        $this->model->setBuyerTaxInfo($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerTaxInfo());
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }
}
