<?php
/**
 * TimeIntervalTest
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
use SpApi\Model\replenishment\v2022_11_07\TimeInterval;

/**
 * TimeIntervalTest Class Doc Comment
 *
 * @category    Class
 * @description A date-time interval in ISO 8601 format which is used to compute metrics. Only the date is required, but you must pass the complete date and time value. For example, November 11, 2022 should be passed as \&quot;2022-11-07T00:00:00Z\&quot;. Note that only data for the trailing 2 years is supported.   **Note**: The &#x60;listOfferMetrics&#x60; operation only supports a time interval which covers a single unit of the aggregation frequency. For example, for a MONTH aggregation frequency, the duration of the interval between the startDate and endDate can not be more than 1 month.
 * @package     SpApi
 */
class TimeIntervalTest extends TestCase
{

    private TimeInterval $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimeInterval();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimeInterval"
     */
    public function testTimeInterval()
    {
        $this->assertInstanceOf(TimeInterval::class, $this->model);
    }

    /**
     * Test attribute "start_date"
     */
    public function testPropertyStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getStartDate());
    }

    /**
     * Test attribute "end_date"
     */
    public function testPropertyEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getEndDate());
    }
}
