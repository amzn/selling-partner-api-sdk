<?php
/**
 * UnitOfMeasurementTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\UnitOfMeasurement;

/**
 * UnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Unit of linear measure.
 * @package     SpApi
 */
class UnitOfMeasurementTest extends TestCase
{

    private UnitOfMeasurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnitOfMeasurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnitOfMeasurement"
     */
    public function testUnitOfMeasurement()
    {
        $this->assertInstanceOf(UnitOfMeasurement::class, $this->model);
    }
}
