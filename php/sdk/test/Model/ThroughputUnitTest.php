<?php
/**
 * ThroughputUnitTest
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
use SpApi\Model\supplySources\v2020_07_01\ThroughputUnit;

/**
 * ThroughputUnitTest Class Doc Comment
 *
 * @category    Class
 * @description The throughput unit
 * @package     SpApi
 */
class ThroughputUnitTest extends TestCase
{

    private ThroughputUnit $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ThroughputUnit();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ThroughputUnit"
     */
    public function testThroughputUnit()
    {
        $this->assertInstanceOf(ThroughputUnit::class, $this->model);
    }
}
