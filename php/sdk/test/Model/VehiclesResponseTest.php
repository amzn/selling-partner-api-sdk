<?php
/**
 * VehiclesResponseTest
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
use SpApi\Model\vehicles\v2024_11_01\VehiclesResponse;

/**
 * VehiclesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Get paginated list of vehicle from Amazon&#39;s catalog
 * @package     SpApi
 */
class VehiclesResponseTest extends TestCase
{

    private VehiclesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VehiclesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VehiclesResponse"
     */
    public function testVehiclesResponse()
    {
        $this->assertInstanceOf(VehiclesResponse::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\vehicles\v2024_11_01\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "vehicles"
     */
    public function testPropertyVehicles()
    {
        $testValue = [];
        
        $this->model->setVehicles($testValue);
        $this->assertEquals($testValue, $this->model->getVehicles());
    }
}
