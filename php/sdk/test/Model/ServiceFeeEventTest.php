<?php
/**
 * ServiceFeeEventTest
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
use SpApi\Model\finances\v0\ServiceFeeEvent;

/**
 * ServiceFeeEventTest Class Doc Comment
 *
 * @category    Class
 * @description A service fee on the seller&#39;s account.
 * @package     SpApi
 */
class ServiceFeeEventTest extends TestCase
{

    private ServiceFeeEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ServiceFeeEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ServiceFeeEvent"
     */
    public function testServiceFeeEvent()
    {
        $this->assertInstanceOf(ServiceFeeEvent::class, $this->model);
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
     * Test attribute "fee_reason"
     */
    public function testPropertyFeeReason()
    {
        $testValue = 'test';
        
        $this->model->setFeeReason($testValue);
        $this->assertEquals($testValue, $this->model->getFeeReason());
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
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "fn_sku"
     */
    public function testPropertyFnSku()
    {
        $testValue = 'test';
        
        $this->model->setFnSku($testValue);
        $this->assertEquals($testValue, $this->model->getFnSku());
    }

    /**
     * Test attribute "fee_description"
     */
    public function testPropertyFeeDescription()
    {
        $testValue = 'test';
        
        $this->model->setFeeDescription($testValue);
        $this->assertEquals($testValue, $this->model->getFeeDescription());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
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
