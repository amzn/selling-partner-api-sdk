<?php
/**
 * SellerDealPaymentEventTest
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
use SpApi\Model\finances\v0\SellerDealPaymentEvent;

/**
 * SellerDealPaymentEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event linked to the payment of a fee related to the specified deal.
 * @package     SpApi
 */
class SellerDealPaymentEventTest extends TestCase
{

    private SellerDealPaymentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellerDealPaymentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellerDealPaymentEvent"
     */
    public function testSellerDealPaymentEvent()
    {
        $this->assertInstanceOf(SellerDealPaymentEvent::class, $this->model);
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
     * Test attribute "deal_id"
     */
    public function testPropertyDealId()
    {
        $testValue = 'test';
        
        $this->model->setDealId($testValue);
        $this->assertEquals($testValue, $this->model->getDealId());
    }

    /**
     * Test attribute "deal_description"
     */
    public function testPropertyDealDescription()
    {
        $testValue = 'test';
        
        $this->model->setDealDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDealDescription());
    }

    /**
     * Test attribute "event_type"
     */
    public function testPropertyEventType()
    {
        $testValue = 'test';
        
        $this->model->setEventType($testValue);
        $this->assertEquals($testValue, $this->model->getEventType());
    }

    /**
     * Test attribute "fee_type"
     */
    public function testPropertyFeeType()
    {
        $testValue = 'test';
        
        $this->model->setFeeType($testValue);
        $this->assertEquals($testValue, $this->model->getFeeType());
    }

    /**
     * Test attribute "fee_amount"
     */
    public function testPropertyFeeAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setFeeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getFeeAmount());
    }

    /**
     * Test attribute "tax_amount"
     */
    public function testPropertyTaxAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTaxAmount());
    }

    /**
     * Test attribute "total_amount"
     */
    public function testPropertyTotalAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTotalAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalAmount());
    }
}
