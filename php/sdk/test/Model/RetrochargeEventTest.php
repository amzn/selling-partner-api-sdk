<?php
/**
 * RetrochargeEventTest
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
use SpApi\Model\finances\v0\RetrochargeEvent;

/**
 * RetrochargeEventTest Class Doc Comment
 *
 * @category    Class
 * @description A retrocharge or retrocharge reversal.
 * @package     SpApi
 */
class RetrochargeEventTest extends TestCase
{

    private RetrochargeEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RetrochargeEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RetrochargeEvent"
     */
    public function testRetrochargeEvent()
    {
        $this->assertInstanceOf(RetrochargeEvent::class, $this->model);
    }

    /**
     * Test attribute "retrocharge_event_type"
     */
    public function testPropertyRetrochargeEventType()
    {
        $testValue = 'test';
        
        $this->model->setRetrochargeEventType($testValue);
        $this->assertEquals($testValue, $this->model->getRetrochargeEventType());
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
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }

    /**
     * Test attribute "base_tax"
     */
    public function testPropertyBaseTax()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setBaseTax($testValue);
        $this->assertEquals($testValue, $this->model->getBaseTax());
    }

    /**
     * Test attribute "shipping_tax"
     */
    public function testPropertyShippingTax()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setShippingTax($testValue);
        $this->assertEquals($testValue, $this->model->getShippingTax());
    }

    /**
     * Test attribute "marketplace_name"
     */
    public function testPropertyMarketplaceName()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceName($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceName());
    }

    /**
     * Test attribute "retrocharge_tax_withheld_list"
     */
    public function testPropertyRetrochargeTaxWithheldList()
    {
        $testValue = [];
        
        $this->model->setRetrochargeTaxWithheldList($testValue);
        $this->assertEquals($testValue, $this->model->getRetrochargeTaxWithheldList());
    }
}
