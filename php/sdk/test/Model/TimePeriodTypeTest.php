<?php
/**
 * TimePeriodTypeTest
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
use OpenAPI\Client\Model\replenishment\v2022_11_07\TimePeriodType;

/**
 * TimePeriodTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The time period type that determines whether the metrics requested are backward-looking (performance) or forward-looking (forecast).
 * @package     OpenAPI\Client
 */
class TimePeriodTypeTest extends TestCase
{

    private TimePeriodType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimePeriodType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimePeriodType"
     */
    public function testTimePeriodType()
    {
        $this->assertInstanceOf(TimePeriodType::class, $this->model);
    }
}
