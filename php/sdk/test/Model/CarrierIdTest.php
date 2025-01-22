<?php
/**
 * CarrierIdTest
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
use OpenAPI\Client\Model\vendor\df\shipping\CarrierId;

/**
 * CarrierIdTest Class Doc Comment
 *
 * @category    Class
 * @description Unique carrier code for the carrier for whom container labels are requested.
 * @package     OpenAPI\Client
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
