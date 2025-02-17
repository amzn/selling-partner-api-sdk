<?php
/**
 * StopTest
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
use SpApi\Model\vendor\shipments\v1\Stop;

/**
 * StopTest Class Doc Comment
 *
 * @category    Class
 * @description Contractual or operational port or point relevant to the movement of the cargo.
 * @package     SpApi
 */
class StopTest extends TestCase
{

    private Stop $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Stop();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Stop"
     */
    public function testStop()
    {
        $this->assertInstanceOf(Stop::class, $this->model);
    }

    /**
     * Test attribute "function_code"
     */
    public function testPropertyFunctionCode()
    {
        $enumInstance = new Stop();
        $allowedValues = $enumInstance->getFunctionCodeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setFunctionCode($testValue);
        $this->assertEquals($testValue, $this->model->getFunctionCode());
    }

    /**
     * Test attribute "location_identification"
     */
    public function testPropertyLocationIdentification()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Location();
        
        $this->model->setLocationIdentification($testValue);
        $this->assertEquals($testValue, $this->model->getLocationIdentification());
    }

    /**
     * Test attribute "arrival_time"
     */
    public function testPropertyArrivalTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setArrivalTime($testValue);
        $this->assertEquals($testValue, $this->model->getArrivalTime());
    }

    /**
     * Test attribute "departure_time"
     */
    public function testPropertyDepartureTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDepartureTime($testValue);
        $this->assertEquals($testValue, $this->model->getDepartureTime());
    }
}
