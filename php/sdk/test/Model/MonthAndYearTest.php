<?php
/**
 * MonthAndYearTest
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
use SpApi\Model\vehicles\v2024_11_01\MonthAndYear;

/**
 * MonthAndYearTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a month in a specific year.
 * @package     SpApi
 */
class MonthAndYearTest extends TestCase
{

    private MonthAndYear $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MonthAndYear();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MonthAndYear"
     */
    public function testMonthAndYear()
    {
        $this->assertInstanceOf(MonthAndYear::class, $this->model);
    }

    /**
     * Test attribute "year"
     */
    public function testPropertyYear()
    {
        $testValue = 1;
        
        $this->model->setYear($testValue);
        $this->assertEquals($testValue, $this->model->getYear());
    }

    /**
     * Test attribute "month"
     */
    public function testPropertyMonth()
    {
        $testValue = 1;
        
        $this->model->setMonth($testValue);
        $this->assertEquals($testValue, $this->model->getMonth());
    }
}
