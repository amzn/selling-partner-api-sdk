<?php
/**
 * RouteTest
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
use OpenAPI\Client\Model\vendor.shipments\Route;

/**
 * RouteTest Class Doc Comment
 *
 * @category    Class
 * @description This is used only for direct import shipment confirmations.
 * @package     OpenAPI\Client
 */
class RouteTest extends TestCase
{

    private Route $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Route();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Route"
     */
    public function testRoute()
    {
        $this->assertInstanceOf(Route::class, $this->model);
    }

    /**
     * Test attribute "stops"
     */
    public function testPropertyStops()
    {
        $testValue = [];
        
        $this->model->setStops($testValue);
        $this->assertEquals($testValue, $this->model->getStops());
    }
}
