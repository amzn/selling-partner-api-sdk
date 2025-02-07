<?php
/**
 * OperatingHourTest
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
use OpenAPI\Client\Model\supplySources\v2020_07_01\OperatingHour;

/**
 * OperatingHourTest Class Doc Comment
 *
 * @category    Class
 * @description The operating hour schema
 * @package     OpenAPI\Client
 */
class OperatingHourTest extends TestCase
{

    private OperatingHour $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OperatingHour();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OperatingHour"
     */
    public function testOperatingHour()
    {
        $this->assertInstanceOf(OperatingHour::class, $this->model);
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        $testValue = 'test';
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        $testValue = 'test';
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }
}
