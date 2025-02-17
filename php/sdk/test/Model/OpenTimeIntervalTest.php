<?php
/**
 * OpenTimeIntervalTest
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
use SpApi\Model\orders\v0\OpenTimeInterval;

/**
 * OpenTimeIntervalTest Class Doc Comment
 *
 * @category    Class
 * @description The time when the business opens or closes.
 * @package     SpApi
 */
class OpenTimeIntervalTest extends TestCase
{

    private OpenTimeInterval $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OpenTimeInterval();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OpenTimeInterval"
     */
    public function testOpenTimeInterval()
    {
        $this->assertInstanceOf(OpenTimeInterval::class, $this->model);
    }

    /**
     * Test attribute "hour"
     */
    public function testPropertyHour()
    {
        $testValue = 123;
        
        $this->model->setHour($testValue);
        $this->assertEquals($testValue, $this->model->getHour());
    }

    /**
     * Test attribute "minute"
     */
    public function testPropertyMinute()
    {
        $testValue = 123;
        
        $this->model->setMinute($testValue);
        $this->assertEquals($testValue, $this->model->getMinute());
    }
}
