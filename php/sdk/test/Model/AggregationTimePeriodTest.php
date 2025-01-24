<?php
/**
 * AggregationTimePeriodTest
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
use OpenAPI\Client\Model\notifications\AggregationTimePeriod;

/**
 * AggregationTimePeriodTest Class Doc Comment
 *
 * @category    Class
 * @description The supported aggregation time periods. For example, if FiveMinutes is the value chosen, and 50 price updates occur for an ASIN within 5 minutes, Amazon will send only two notifications; one for the first event, and then a subsequent notification 5 minutes later with the final end state of the data. The 48 interim events will be dropped.
 * @package     OpenAPI\Client
 */
class AggregationTimePeriodTest extends TestCase
{

    private AggregationTimePeriod $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AggregationTimePeriod();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AggregationTimePeriod"
     */
    public function testAggregationTimePeriod()
    {
        $this->assertInstanceOf(AggregationTimePeriod::class, $this->model);
    }
}
