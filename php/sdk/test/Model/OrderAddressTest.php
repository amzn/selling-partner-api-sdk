<?php
/**
 * OrderAddressTest
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
use SpApi\Model\orders\v0\OrderAddress;

/**
 * OrderAddressTest Class Doc Comment
 *
 * @category    Class
 * @description The shipping address for the order.
 * @package     SpApi
 */
class OrderAddressTest extends TestCase
{

    private OrderAddress $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderAddress();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderAddress"
     */
    public function testOrderAddress()
    {
        $this->assertInstanceOf(OrderAddress::class, $this->model);
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
     * Test attribute "buyer_company_name"
     */
    public function testPropertyBuyerCompanyName()
    {
        $testValue = 'test';
        
        $this->model->setBuyerCompanyName($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerCompanyName());
    }

    /**
     * Test attribute "shipping_address"
     */
    public function testPropertyShippingAddress()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Address();
        
        $this->model->setShippingAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShippingAddress());
    }

    /**
     * Test attribute "delivery_preferences"
     */
    public function testPropertyDeliveryPreferences()
    {
        
        $testValue = new \SpApi\Model\orders\v0\DeliveryPreferences();
        
        $this->model->setDeliveryPreferences($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryPreferences());
    }
}
