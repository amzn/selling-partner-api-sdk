<?php
/**
 * MetricTest
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
use OpenAPI\Client\Model\replenishment\Metric;

/**
 * MetricTest Class Doc Comment
 *
 * @category    Class
 * @description The metric name and description.
 * @package     OpenAPI\Client
 */
class MetricTest extends TestCase
{

    private Metric $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Metric();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Metric"
     */
    public function testMetric()
    {
        $this->assertInstanceOf(Metric::class, $this->model);
    }
}
