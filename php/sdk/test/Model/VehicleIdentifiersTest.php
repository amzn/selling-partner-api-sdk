<?php
/**
 * VehicleIdentifiersTest
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
use SpApi\Model\vehicles\v2024_11_01\VehicleIdentifiers;

/**
 * VehicleIdentifiersTest Class Doc Comment
 *
 * @category    Class
 * @description Combination of vehicle standard and id that can uniquely identify a vehicle from Amazon&#39;s catalog.
 * @package     SpApi
 */
class VehicleIdentifiersTest extends TestCase
{

    private VehicleIdentifiers $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VehicleIdentifiers();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VehicleIdentifiers"
     */
    public function testVehicleIdentifiers()
    {
        $this->assertInstanceOf(VehicleIdentifiers::class, $this->model);
    }

    /**
     * Test attribute "standard"
     */
    public function testPropertyStandard()
    {
        $enumInstance = new \SpApi\Model\vehicles\v2024_11_01\VehicleStandard();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStandard($testValue);
        $this->assertEquals($testValue, $this->model->getStandard());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
