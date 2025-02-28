<?php
/**
 * TimeRangeContextTest
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
use SpApi\Model\finances\v2024_06_19\TimeRangeContext;

/**
 * TimeRangeContextTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to time range for transaction.
 * @package     SpApi
 */
class TimeRangeContextTest extends TestCase
{

    private TimeRangeContext $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimeRangeContext();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimeRangeContext"
     */
    public function testTimeRangeContext()
    {
        $this->assertInstanceOf(TimeRangeContext::class, $this->model);
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }
}
