<?php
/**
 * PreferredDeliveryTimeTest
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
use SpApi\Model\orders\v0\PreferredDeliveryTime;

/**
 * PreferredDeliveryTimeTest Class Doc Comment
 *
 * @category    Class
 * @description The time window when the delivery is preferred.
 * @package     SpApi
 */
class PreferredDeliveryTimeTest extends TestCase
{

    private PreferredDeliveryTime $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PreferredDeliveryTime();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PreferredDeliveryTime"
     */
    public function testPreferredDeliveryTime()
    {
        $this->assertInstanceOf(PreferredDeliveryTime::class, $this->model);
    }

    /**
     * Test attribute "business_hours"
     */
    public function testPropertyBusinessHours()
    {
        $testValue = [];
        
        $this->model->setBusinessHours($testValue);
        $this->assertEquals($testValue, $this->model->getBusinessHours());
    }

    /**
     * Test attribute "exception_dates"
     */
    public function testPropertyExceptionDates()
    {
        $testValue = [];
        
        $this->model->setExceptionDates($testValue);
        $this->assertEquals($testValue, $this->model->getExceptionDates());
    }
}
