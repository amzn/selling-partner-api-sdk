<?php
/**
 * RegionTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Region;

/**
 * RegionTest Class Doc Comment
 *
 * @category    Class
 * @description Representation of a location used within the inbounding experience.
 * @package     OpenAPI\Client
 */
class RegionTest extends TestCase
{

    private Region $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Region();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Region"
     */
    public function testRegion()
    {
        $this->assertInstanceOf(Region::class, $this->model);
    }

    /**
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }

    /**
     * Test attribute "state"
     */
    public function testPropertyState()
    {
        $testValue = 'test';
        
        $this->model->setState($testValue);
        $this->assertEquals($testValue, $this->model->getState());
    }

    /**
     * Test attribute "warehouse_id"
     */
    public function testPropertyWarehouseId()
    {
        $testValue = 'test';
        
        $this->model->setWarehouseId($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseId());
    }
}
