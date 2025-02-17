<?php
/**
 * ExceptionDatesTest
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
use SpApi\Model\orders\v0\ExceptionDates;

/**
 * ExceptionDatesTest Class Doc Comment
 *
 * @category    Class
 * @description Dates when the business is closed or open with a different time window.
 * @package     SpApi
 */
class ExceptionDatesTest extends TestCase
{

    private ExceptionDates $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExceptionDates();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExceptionDates"
     */
    public function testExceptionDates()
    {
        $this->assertInstanceOf(ExceptionDates::class, $this->model);
    }

    /**
     * Test attribute "exception_date"
     */
    public function testPropertyExceptionDate()
    {
        $testValue = 'test';
        
        $this->model->setExceptionDate($testValue);
        $this->assertEquals($testValue, $this->model->getExceptionDate());
    }

    /**
     * Test attribute "is_open"
     */
    public function testPropertyIsOpen()
    {
        $testValue = true;
        
        $this->model->setIsOpen($testValue);
        $this->assertEquals($testValue, $this->model->getIsOpen());
    }

    /**
     * Test attribute "open_intervals"
     */
    public function testPropertyOpenIntervals()
    {
        $testValue = [];
        
        $this->model->setOpenIntervals($testValue);
        $this->assertEquals($testValue, $this->model->getOpenIntervals());
    }
}
