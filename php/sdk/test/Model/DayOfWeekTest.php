<?php
/**
 * DayOfWeekTest
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
use SpApi\Model\services\v1\DayOfWeek;

/**
 * DayOfWeekTest Class Doc Comment
 *
 * @category    Class
 * @description The day of the week.
 * @package     SpApi
 */
class DayOfWeekTest extends TestCase
{

    private DayOfWeek $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DayOfWeek();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DayOfWeek"
     */
    public function testDayOfWeek()
    {
        $this->assertInstanceOf(DayOfWeek::class, $this->model);
    }
}
