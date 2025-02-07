<?php
/**
 * TimeUnitTest
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
use OpenAPI\Client\Model\supplySources\v2020_07_01\TimeUnit;

/**
 * TimeUnitTest Class Doc Comment
 *
 * @category    Class
 * @description The time unit
 * @package     OpenAPI\Client
 */
class TimeUnitTest extends TestCase
{

    private TimeUnit $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimeUnit();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimeUnit"
     */
    public function testTimeUnit()
    {
        $this->assertInstanceOf(TimeUnit::class, $this->model);
    }
}
