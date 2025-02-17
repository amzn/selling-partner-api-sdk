<?php
/**
 * RangeCapacityTest
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
use SpApi\Model\services\v1\RangeCapacity;

/**
 * RangeCapacityTest Class Doc Comment
 *
 * @category    Class
 * @description Range capacity entity where each entry has a capacity type and corresponding slots.
 * @package     SpApi
 */
class RangeCapacityTest extends TestCase
{

    private RangeCapacity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RangeCapacity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RangeCapacity"
     */
    public function testRangeCapacity()
    {
        $this->assertInstanceOf(RangeCapacity::class, $this->model);
    }

    /**
     * Test attribute "capacity_type"
     */
    public function testPropertyCapacityType()
    {
        $enumInstance = new \SpApi\Model\services\v1\CapacityType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCapacityType($testValue);
        $this->assertEquals($testValue, $this->model->getCapacityType());
    }

    /**
     * Test attribute "slots"
     */
    public function testPropertySlots()
    {
        $testValue = [];
        
        $this->model->setSlots($testValue);
        $this->assertEquals($testValue, $this->model->getSlots());
    }
}
