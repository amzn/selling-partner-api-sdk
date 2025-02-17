<?php
/**
 * ExceptionOperatingHoursTest
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
use SpApi\Model\shipping\v2\ExceptionOperatingHours;

/**
 * ExceptionOperatingHoursTest Class Doc Comment
 *
 * @category    Class
 * @description Defines exceptions to standard operating hours for certain date ranges.
 * @package     SpApi
 */
class ExceptionOperatingHoursTest extends TestCase
{

    private ExceptionOperatingHours $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExceptionOperatingHours();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExceptionOperatingHours"
     */
    public function testExceptionOperatingHours()
    {
        $this->assertInstanceOf(ExceptionOperatingHours::class, $this->model);
    }

    /**
     * Test attribute "date_range"
     */
    public function testPropertyDateRange()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\DateRange();
        
        $this->model->setDateRange($testValue);
        $this->assertEquals($testValue, $this->model->getDateRange());
    }

    /**
     * Test attribute "operating_hours"
     */
    public function testPropertyOperatingHours()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\OperatingHours();
        
        $this->model->setOperatingHours($testValue);
        $this->assertEquals($testValue, $this->model->getOperatingHours());
    }
}
