<?php
/**
 * AggregationFrequencyTest
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
use OpenAPI\Client\Model\replenishment\AggregationFrequency;

/**
 * AggregationFrequencyTest Class Doc Comment
 *
 * @category    Class
 * @description The time period used to group data in the response. Note that this is only valid for the &#x60;PERFORMANCE&#x60; time period type.
 * @package     OpenAPI\Client
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
