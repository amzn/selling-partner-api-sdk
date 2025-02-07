<?php
/**
 * WeightUnitOfMeasurementTest
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
use OpenAPI\Client\Model\awd\v2024_05_09\WeightUnitOfMeasurement;

/**
 * WeightUnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Unit of measurement for the package weight.
 * @package     OpenAPI\Client
 */
class WeightUnitOfMeasurementTest extends TestCase
{

    private WeightUnitOfMeasurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new WeightUnitOfMeasurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "WeightUnitOfMeasurement"
     */
    public function testWeightUnitOfMeasurement()
    {
        $this->assertInstanceOf(WeightUnitOfMeasurement::class, $this->model);
    }
}
