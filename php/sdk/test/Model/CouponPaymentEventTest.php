<?php
/**
 * CouponPaymentEventTest
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
use SpApi\Model\finances\v0\CouponPaymentEvent;

/**
 * CouponPaymentEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to coupon payments.
 * @package     SpApi
 */
class CouponPaymentEventTest extends TestCase
{

    private CouponPaymentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CouponPaymentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CouponPaymentEvent"
     */
    public function testCouponPaymentEvent()
    {
        $this->assertInstanceOf(CouponPaymentEvent::class, $this->model);
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
     * Test attribute "coupon_id"
     */
    public function testPropertyCouponId()
    {
        $testValue = 'test';
        
        $this->model->setCouponId($testValue);
        $this->assertEquals($testValue, $this->model->getCouponId());
    }

    /**
     * Test attribute "seller_coupon_description"
     */
    public function testPropertySellerCouponDescription()
    {
        $testValue = 'test';
        
        $this->model->setSellerCouponDescription($testValue);
        $this->assertEquals($testValue, $this->model->getSellerCouponDescription());
    }

    /**
     * Test attribute "clip_or_redemption_count"
     */
    public function testPropertyClipOrRedemptionCount()
    {
        
        $testValue = new int();
        
        $this->model->setClipOrRedemptionCount($testValue);
        $this->assertEquals($testValue, $this->model->getClipOrRedemptionCount());
    }

    /**
     * Test attribute "payment_event_id"
     */
    public function testPropertyPaymentEventId()
    {
        $testValue = 'test';
        
        $this->model->setPaymentEventId($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentEventId());
    }

    /**
     * Test attribute "fee_component"
     */
    public function testPropertyFeeComponent()
    {
        
        $testValue = new \SpApi\Model\finances\v0\FeeComponent();
        
        $this->model->setFeeComponent($testValue);
        $this->assertEquals($testValue, $this->model->getFeeComponent());
    }

    /**
     * Test attribute "charge_component"
     */
    public function testPropertyChargeComponent()
    {
        
        $testValue = new \SpApi\Model\finances\v0\ChargeComponent();
        
        $this->model->setChargeComponent($testValue);
        $this->assertEquals($testValue, $this->model->getChargeComponent());
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
