<?php
/**
 * PayWithAmazonEventTest
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
use OpenAPI\Client\Model\financesv0\PayWithAmazonEvent;

/**
 * PayWithAmazonEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to the seller&#39;s Pay with Amazon account.
 * @package     OpenAPI\Client
 */
class PayWithAmazonEventTest extends TestCase
{

    private PayWithAmazonEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PayWithAmazonEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PayWithAmazonEvent"
     */
    public function testPayWithAmazonEvent()
    {
        $this->assertInstanceOf(PayWithAmazonEvent::class, $this->model);
    }

    /**
     * Test attribute "seller_order_id"
     */
    public function testPropertySellerOrderId()
    {
        $testValue = 'test';
        
        $this->model->setSellerOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerOrderId());
    }

    /**
     * Test attribute "transaction_posted_date"
     */
    public function testPropertyTransactionPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setTransactionPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionPostedDate());
    }

    /**
     * Test attribute "business_object_type"
     */
    public function testPropertyBusinessObjectType()
    {
        $testValue = 'test';
        
        $this->model->setBusinessObjectType($testValue);
        $this->assertEquals($testValue, $this->model->getBusinessObjectType());
    }

    /**
     * Test attribute "sales_channel"
     */
    public function testPropertySalesChannel()
    {
        $testValue = 'test';
        
        $this->model->setSalesChannel($testValue);
        $this->assertEquals($testValue, $this->model->getSalesChannel());
    }

    /**
     * Test attribute "charge"
     */
    public function testPropertyCharge()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesv0\ChargeComponent();
        
        $this->model->setCharge($testValue);
        $this->assertEquals($testValue, $this->model->getCharge());
    }

    /**
     * Test attribute "fee_list"
     */
    public function testPropertyFeeList()
    {
        $testValue = [];
        
        $this->model->setFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getFeeList());
    }

    /**
     * Test attribute "payment_amount_type"
     */
    public function testPropertyPaymentAmountType()
    {
        $testValue = 'test';
        
        $this->model->setPaymentAmountType($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentAmountType());
    }

    /**
     * Test attribute "amount_description"
     */
    public function testPropertyAmountDescription()
    {
        $testValue = 'test';
        
        $this->model->setAmountDescription($testValue);
        $this->assertEquals($testValue, $this->model->getAmountDescription());
    }

    /**
     * Test attribute "fulfillment_channel"
     */
    public function testPropertyFulfillmentChannel()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentChannel($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentChannel());
    }

    /**
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $testValue = 'test';
        
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }
}
