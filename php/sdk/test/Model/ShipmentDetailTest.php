<?php
/**
 * ShipmentDetailTest
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
use SpApi\Model\invoicing\v0\ShipmentDetail;

/**
 * ShipmentDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The information required by a selling partner to issue a shipment invoice.
 * @package     SpApi
 */
class ShipmentDetailTest extends TestCase
{

    private ShipmentDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentDetail"
     */
    public function testShipmentDetail()
    {
        $this->assertInstanceOf(ShipmentDetail::class, $this->model);
    }

    /**
     * Test attribute "warehouse_id"
     */
    public function testPropertyWarehouseId()
    {
        $testValue = 'test';
        
        $this->model->setWarehouseId($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseId());
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
     * Test attribute "amazon_shipment_id"
     */
    public function testPropertyAmazonShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonShipmentId());
    }

    /**
     * Test attribute "purchase_date"
     */
    public function testPropertyPurchaseDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPurchaseDate($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseDate());
    }

    /**
     * Test attribute "shipping_address"
     */
    public function testPropertyShippingAddress()
    {
        
        $testValue = new \SpApi\Model\invoicing\v0\Address();
        
        $this->model->setShippingAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShippingAddress());
    }

    /**
     * Test attribute "payment_method_details"
     */
    public function testPropertyPaymentMethodDetails()
    {
        $testValue = [];
        
        $this->model->setPaymentMethodDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethodDetails());
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
        
        $testValue = new \SpApi\Model\invoicing\v0\BuyerTaxInfo();
        
        $this->model->setBuyerTaxInfo($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerTaxInfo());
    }

    /**
     * Test attribute "marketplace_tax_info"
     */
    public function testPropertyMarketplaceTaxInfo()
    {
        
        $testValue = new \SpApi\Model\invoicing\v0\MarketplaceTaxInfo();
        
        $this->model->setMarketplaceTaxInfo($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceTaxInfo());
    }

    /**
     * Test attribute "seller_display_name"
     */
    public function testPropertySellerDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setSellerDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getSellerDisplayName());
    }

    /**
     * Test attribute "shipment_items"
     */
    public function testPropertyShipmentItems()
    {
        $testValue = [];
        
        $this->model->setShipmentItems($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentItems());
    }
}
