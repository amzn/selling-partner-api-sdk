<?php
/**
 * CarrierIdTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\CarrierId;

/**
 * CarrierIdTest Class Doc Comment
 *
 * @category    Class
 * @description The unique carrier code for the carrier for whom container labels are requested.
 * @package     SpApi
 */
class CarrierIdTest extends TestCase
{

    private CarrierId $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierId();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierId"
     */
    public function testCarrierId()
    {
        $this->assertInstanceOf(CarrierId::class, $this->model);
    }
}
