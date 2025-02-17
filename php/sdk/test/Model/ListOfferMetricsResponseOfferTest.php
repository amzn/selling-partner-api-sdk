<?php
/**
 * ListOfferMetricsResponseOfferTest
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
use SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsResponseOffer;

/**
 * ListOfferMetricsResponseOfferTest Class Doc Comment
 *
 * @category    Class
 * @description An object which contains offer metrics.
 * @package     SpApi
 */
class ListOfferMetricsResponseOfferTest extends TestCase
{

    private ListOfferMetricsResponseOffer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsResponseOffer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsResponseOffer"
     */
    public function testListOfferMetricsResponseOffer()
    {
        $this->assertInstanceOf(ListOfferMetricsResponseOffer::class, $this->model);
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
     * Test attribute "not_delivered_due_to_oos"
     */
    public function testPropertyNotDeliveredDueToOos()
    {
        
        $testValue = new float();
        
        $this->model->setNotDeliveredDueToOos($testValue);
        $this->assertEquals($testValue, $this->model->getNotDeliveredDueToOos());
    }

    /**
     * Test attribute "total_subscriptions_revenue"
     */
    public function testPropertyTotalSubscriptionsRevenue()
    {
        
        $testValue = new float();
        
        $this->model->setTotalSubscriptionsRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getTotalSubscriptionsRevenue());
    }

    /**
     * Test attribute "shipped_subscription_units"
     */
    public function testPropertyShippedSubscriptionUnits()
    {
        $testValue = 1;
        
        $this->model->setShippedSubscriptionUnits($testValue);
        $this->assertEquals($testValue, $this->model->getShippedSubscriptionUnits());
    }

    /**
     * Test attribute "active_subscriptions"
     */
    public function testPropertyActiveSubscriptions()
    {
        $testValue = 1;
        
        $this->model->setActiveSubscriptions($testValue);
        $this->assertEquals($testValue, $this->model->getActiveSubscriptions());
    }

    /**
     * Test attribute "revenue_penetration"
     */
    public function testPropertyRevenuePenetration()
    {
        
        $testValue = new float();
        
        $this->model->setRevenuePenetration($testValue);
        $this->assertEquals($testValue, $this->model->getRevenuePenetration());
    }

    /**
     * Test attribute "lost_revenue_due_to_oos"
     */
    public function testPropertyLostRevenueDueToOos()
    {
        
        $testValue = new float();
        
        $this->model->setLostRevenueDueToOos($testValue);
        $this->assertEquals($testValue, $this->model->getLostRevenueDueToOos());
    }

    /**
     * Test attribute "coupons_revenue_penetration"
     */
    public function testPropertyCouponsRevenuePenetration()
    {
        
        $testValue = new float();
        
        $this->model->setCouponsRevenuePenetration($testValue);
        $this->assertEquals($testValue, $this->model->getCouponsRevenuePenetration());
    }

    /**
     * Test attribute "share_of_coupon_subscriptions"
     */
    public function testPropertyShareOfCouponSubscriptions()
    {
        
        $testValue = new float();
        
        $this->model->setShareOfCouponSubscriptions($testValue);
        $this->assertEquals($testValue, $this->model->getShareOfCouponSubscriptions());
    }

    /**
     * Test attribute "next30_day_total_subscriptions_revenue"
     */
    public function testPropertyNext30DayTotalSubscriptionsRevenue()
    {
        
        $testValue = new float();
        
        $this->model->setNext30DayTotalSubscriptionsRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getNext30DayTotalSubscriptionsRevenue());
    }

    /**
     * Test attribute "next60_day_total_subscriptions_revenue"
     */
    public function testPropertyNext60DayTotalSubscriptionsRevenue()
    {
        
        $testValue = new float();
        
        $this->model->setNext60DayTotalSubscriptionsRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getNext60DayTotalSubscriptionsRevenue());
    }

    /**
     * Test attribute "next90_day_total_subscriptions_revenue"
     */
    public function testPropertyNext90DayTotalSubscriptionsRevenue()
    {
        
        $testValue = new float();
        
        $this->model->setNext90DayTotalSubscriptionsRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getNext90DayTotalSubscriptionsRevenue());
    }

    /**
     * Test attribute "next30_day_shipped_subscription_units"
     */
    public function testPropertyNext30DayShippedSubscriptionUnits()
    {
        $testValue = 1;
        
        $this->model->setNext30DayShippedSubscriptionUnits($testValue);
        $this->assertEquals($testValue, $this->model->getNext30DayShippedSubscriptionUnits());
    }

    /**
     * Test attribute "next60_day_shipped_subscription_units"
     */
    public function testPropertyNext60DayShippedSubscriptionUnits()
    {
        $testValue = 1;
        
        $this->model->setNext60DayShippedSubscriptionUnits($testValue);
        $this->assertEquals($testValue, $this->model->getNext60DayShippedSubscriptionUnits());
    }

    /**
     * Test attribute "next90_day_shipped_subscription_units"
     */
    public function testPropertyNext90DayShippedSubscriptionUnits()
    {
        $testValue = 1;
        
        $this->model->setNext90DayShippedSubscriptionUnits($testValue);
        $this->assertEquals($testValue, $this->model->getNext90DayShippedSubscriptionUnits());
    }

    /**
     * Test attribute "time_interval"
     */
    public function testPropertyTimeInterval()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\TimeInterval();
        
        $this->model->setTimeInterval($testValue);
        $this->assertEquals($testValue, $this->model->getTimeInterval());
    }

    /**
     * Test attribute "currency_code"
     */
    public function testPropertyCurrencyCode()
    {
        $testValue = 'test';
        
        $this->model->setCurrencyCode($testValue);
        $this->assertEquals($testValue, $this->model->getCurrencyCode());
    }
}
