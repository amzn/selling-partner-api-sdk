<?php
/**
 * UnitOfMeasurementTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinboundv0\UnitOfMeasurement;

/**
 * UnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the unit of measurement.
 * @package     OpenAPI\Client
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
