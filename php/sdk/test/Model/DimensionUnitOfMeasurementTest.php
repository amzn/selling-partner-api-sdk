<?php
/**
 * DimensionUnitOfMeasurementTest
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
use OpenAPI\Client\Model\awd\DimensionUnitOfMeasurement;

/**
 * DimensionUnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Unit of measurement for package dimensions.
 * @package     OpenAPI\Client
 */
class DimensionUnitOfMeasurementTest extends TestCase
{

    private DimensionUnitOfMeasurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DimensionUnitOfMeasurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DimensionUnitOfMeasurement"
     */
    public function testDimensionUnitOfMeasurement()
    {
        $this->assertInstanceOf(DimensionUnitOfMeasurement::class, $this->model);
    }
}
