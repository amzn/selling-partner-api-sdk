<?php
/**
 * GetSellingPartnerMetricsResponseMetricTest
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
use OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsResponseMetric;

/**
 * GetSellingPartnerMetricsResponseMetricTest Class Doc Comment
 *
 * @category    Class
 * @description An object which contains metric data for a selling partner.
 * @package     OpenAPI\Client
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
     * Test attribute "time_interval"
     */
    public function testPropertyTimeInterval()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\TimeInterval();
        
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
