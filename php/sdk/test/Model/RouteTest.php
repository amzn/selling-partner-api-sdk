<?php
/**
 * RouteTest
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
use SpApi\Model\vendor\shipments\v1\Route;

/**
 * RouteTest Class Doc Comment
 *
 * @category    Class
 * @description This is used only for direct import shipment confirmations.
 * @package     SpApi
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
