<?php
/**
 * GetSellingPartnerMetricsResponseMetricTest
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
use SpApi\Model\replenishment\v2022_11_07\GetSellingPartnerMetricsResponseMetric;

/**
 * GetSellingPartnerMetricsResponseMetricTest Class Doc Comment
 *
 * @category    Class
 * @description An object which contains metric data for a selling partner.
 * @package     SpApi
 */
class GetSellingPartnerMetricsResponseMetricTest extends TestCase
{

    private GetSellingPartnerMetricsResponseMetric $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSellingPartnerMetricsResponseMetric();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSellingPartnerMetricsResponseMetric"
     */
    public function testGetSellingPartnerMetricsResponseMetric()
    {
        $this->assertInstanceOf(GetSellingPartnerMetricsResponseMetric::class, $this->model);
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
     * Test attribute "subscriber_average_revenue"
     */
    public function testPropertySubscriberAverageRevenue()
    {
        
        $testValue = new float();
        
        $this->model->setSubscriberAverageRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getSubscriberAverageRevenue());
    }

    /**
     * Test attribute "non_subscriber_average_revenue"
     */
    public function testPropertyNonSubscriberAverageRevenue()
    {
        
        $testValue = new float();
        
        $this->model->setNonSubscriberAverageRevenue($testValue);
        $this->assertEquals($testValue, $this->model->getNonSubscriberAverageRevenue());
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
     * Test attribute "subscriber_average_reorders"
     */
    public function testPropertySubscriberAverageReorders()
    {
        
        $testValue = new float();
        
        $this->model->setSubscriberAverageReorders($testValue);
        $this->assertEquals($testValue, $this->model->getSubscriberAverageReorders());
    }

    /**
     * Test attribute "non_subscriber_average_reorders"
     */
    public function testPropertyNonSubscriberAverageReorders()
    {
        
        $testValue = new float();
        
        $this->model->setNonSubscriberAverageReorders($testValue);
        $this->assertEquals($testValue, $this->model->getNonSubscriberAverageReorders());
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
     * Test attribute "revenue_from_subscriptions_with_multiple_deliveries"
     */
    public function testPropertyRevenueFromSubscriptionsWithMultipleDeliveries()
    {
        
        $testValue = new float();
        
        $this->model->setRevenueFromSubscriptionsWithMultipleDeliveries($testValue);
        $this->assertEquals($testValue, $this->model->getRevenueFromSubscriptionsWithMultipleDeliveries());
    }

    /**
     * Test attribute "revenue_from_active_subscriptions_with_single_delivery"
     */
    public function testPropertyRevenueFromActiveSubscriptionsWithSingleDelivery()
    {
        
        $testValue = new float();
        
        $this->model->setRevenueFromActiveSubscriptionsWithSingleDelivery($testValue);
        $this->assertEquals($testValue, $this->model->getRevenueFromActiveSubscriptionsWithSingleDelivery());
    }

    /**
     * Test attribute "revenue_from_cancelled_subscriptions_after_single_delivery"
     */
    public function testPropertyRevenueFromCancelledSubscriptionsAfterSingleDelivery()
    {
        
        $testValue = new float();
        
        $this->model->setRevenueFromCancelledSubscriptionsAfterSingleDelivery($testValue);
        $this->assertEquals($testValue, $this->model->getRevenueFromCancelledSubscriptionsAfterSingleDelivery());
    }

    /**
     * Test attribute "subscriber_retention_for30_days"
     */
    public function testPropertySubscriberRetentionFor30Days()
    {
        
        $testValue = new float();
        
        $this->model->setSubscriberRetentionFor30Days($testValue);
        $this->assertEquals($testValue, $this->model->getSubscriberRetentionFor30Days());
    }

    /**
     * Test attribute "subscriber_retention_for90_days"
     */
    public function testPropertySubscriberRetentionFor90Days()
    {
        
        $testValue = new float();
        
        $this->model->setSubscriberRetentionFor90Days($testValue);
        $this->assertEquals($testValue, $this->model->getSubscriberRetentionFor90Days());
    }

    /**
     * Test attribute "revenue_penetration_for0_percent_seller_funding"
     */
    public function testPropertyRevenuePenetrationFor0PercentSellerFunding()
    {
        
        $testValue = new float();
        
        $this->model->setRevenuePenetrationFor0PercentSellerFunding($testValue);
        $this->assertEquals($testValue, $this->model->getRevenuePenetrationFor0PercentSellerFunding());
    }

    /**
     * Test attribute "revenue_penetration_for5_percent_seller_funding"
     */
    public function testPropertyRevenuePenetrationFor5PercentSellerFunding()
    {
        
        $testValue = new float();
        
        $this->model->setRevenuePenetrationFor5PercentSellerFunding($testValue);
        $this->assertEquals($testValue, $this->model->getRevenuePenetrationFor5PercentSellerFunding());
    }

    /**
     * Test attribute "revenue_penetration_for10_percent_seller_funding"
     */
    public function testPropertyRevenuePenetrationFor10PercentSellerFunding()
    {
        
        $testValue = new float();
        
        $this->model->setRevenuePenetrationFor10PercentSellerFunding($testValue);
        $this->assertEquals($testValue, $this->model->getRevenuePenetrationFor10PercentSellerFunding());
    }

    /**
     * Test attribute "revenue_penetration_for5_plus_percent_seller_funding"
     */
    public function testPropertyRevenuePenetrationFor5PlusPercentSellerFunding()
    {
        
        $testValue = new float();
        
        $this->model->setRevenuePenetrationFor5PlusPercentSellerFunding($testValue);
        $this->assertEquals($testValue, $this->model->getRevenuePenetrationFor5PlusPercentSellerFunding());
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
