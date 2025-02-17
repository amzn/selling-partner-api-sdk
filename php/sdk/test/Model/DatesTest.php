<?php
/**
 * DatesTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\Dates;

/**
 * DatesTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies the date that the seller expects their shipment will be shipped.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Window();
        
        $this->model->setReadyToShipWindow($testValue);
        $this->assertEquals($testValue, $this->model->getReadyToShipWindow());
    }
}
