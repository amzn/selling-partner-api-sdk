<?php
/**
 * NetCostUnitOfMeasureTest
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
use SpApi\Model\vendor\invoices\v1\NetCostUnitOfMeasure;

/**
 * NetCostUnitOfMeasureTest Class Doc Comment
 *
 * @category    Class
 * @description This field represents weight unit of measure of items that are ordered by cases and supporting priced by weight.
 * @package     SpApi
 */
class NetCostUnitOfMeasureTest extends TestCase
{

    private NetCostUnitOfMeasure $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NetCostUnitOfMeasure();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NetCostUnitOfMeasure"
     */
    public function testNetCostUnitOfMeasure()
    {
        $this->assertInstanceOf(NetCostUnitOfMeasure::class, $this->model);
    }
}
