<?php
/**
 * ParkingCostTypeTest
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
use OpenAPI\Client\Model\supplySources\ParkingCostType;

/**
 * ParkingCostTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The parking cost type.
 * @package     OpenAPI\Client
 */
class ParkingCostTypeTest extends TestCase
{

    private ParkingCostType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ParkingCostType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ParkingCostType"
     */
    public function testParkingCostType()
    {
        $this->assertInstanceOf(ParkingCostType::class, $this->model);
    }
}
