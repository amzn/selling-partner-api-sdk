<?php
/**
 * TimeWindowTest
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
use OpenAPI\Client\Model\shipping\TimeWindow;

/**
 * TimeWindowTest Class Doc Comment
 *
 * @category    Class
 * @description The start and end time that specifies the time interval of an event.
 * @package     OpenAPI\Client
 */
class TimeWindowTest extends TestCase
{

    private TimeWindow $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimeWindow();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimeWindow"
     */
    public function testTimeWindow()
    {
        $this->assertInstanceOf(TimeWindow::class, $this->model);
    }

    /**
     * Test attribute "start"
     */
    public function testPropertyStart()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStart($testValue);
        $this->assertEquals($testValue, $this->model->getStart());
    }

    /**
     * Test attribute "end"
     */
    public function testPropertyEnd()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEnd($testValue);
        $this->assertEquals($testValue, $this->model->getEnd());
    }
}
