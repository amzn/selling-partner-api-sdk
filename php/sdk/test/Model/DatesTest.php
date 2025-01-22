<?php
/**
 * DatesTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Dates;

/**
 * DatesTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies the date that the seller expects their shipment will be shipped.
 * @package     OpenAPI\Client
 */
class DatesTest extends TestCase
{

    private Dates $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Dates();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Dates"
     */
    public function testDates()
    {
        $this->assertInstanceOf(Dates::class, $this->model);
    }

    /**
     * Test attribute "ready_to_ship_window"
     */
    public function testPropertyReadyToShipWindow()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Window();
        
        $this->model->setReadyToShipWindow($testValue);
        $this->assertEquals($testValue, $this->model->getReadyToShipWindow());
    }
}
