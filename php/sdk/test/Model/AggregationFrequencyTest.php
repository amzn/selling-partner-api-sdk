<?php
/**
 * AggregationFrequencyTest
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
use SpApi\Model\replenishment\v2022_11_07\AggregationFrequency;

/**
 * AggregationFrequencyTest Class Doc Comment
 *
 * @category    Class
 * @description The time period used to group data in the response. Note that this is only valid for the &#x60;PERFORMANCE&#x60; time period type.
 * @package     SpApi
 */
class AggregationFrequencyTest extends TestCase
{

    private AggregationFrequency $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AggregationFrequency();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AggregationFrequency"
     */
    public function testAggregationFrequency()
    {
        $this->assertInstanceOf(AggregationFrequency::class, $this->model);
    }
}
