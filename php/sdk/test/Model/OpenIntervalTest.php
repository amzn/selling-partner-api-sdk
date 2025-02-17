<?php
/**
 * OpenIntervalTest
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
use SpApi\Model\orders\v0\OpenInterval;

/**
 * OpenIntervalTest Class Doc Comment
 *
 * @category    Class
 * @description The time interval for which the business is open.
 * @package     SpApi
 */
class OpenIntervalTest extends TestCase
{

    private OpenInterval $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OpenInterval();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OpenInterval"
     */
    public function testOpenInterval()
    {
        $this->assertInstanceOf(OpenInterval::class, $this->model);
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \SpApi\Model\orders\v0\OpenTimeInterval();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \SpApi\Model\orders\v0\OpenTimeInterval();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }
}
