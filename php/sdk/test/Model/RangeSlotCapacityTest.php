<?php
/**
 * RangeSlotCapacityTest
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
use SpApi\Model\services\v1\RangeSlotCapacity;

/**
 * RangeSlotCapacityTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;getRangeSlotCapacity&#x60; operation.
 * @package     SpApi
 */
class RangeSlotCapacityTest extends TestCase
{

    private RangeSlotCapacity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RangeSlotCapacity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RangeSlotCapacity"
     */
    public function testRangeSlotCapacity()
    {
        $this->assertInstanceOf(RangeSlotCapacity::class, $this->model);
    }

    /**
     * Test attribute "resource_id"
     */
    public function testPropertyResourceId()
    {
        $testValue = 'test';
        
        $this->model->setResourceId($testValue);
        $this->assertEquals($testValue, $this->model->getResourceId());
    }

    /**
     * Test attribute "capacities"
     */
    public function testPropertyCapacities()
    {
        $testValue = [];
        
        $this->model->setCapacities($testValue);
        $this->assertEquals($testValue, $this->model->getCapacities());
    }

    /**
     * Test attribute "next_page_token"
     */
    public function testPropertyNextPageToken()
    {
        $testValue = 'test';
        
        $this->model->setNextPageToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextPageToken());
    }
}
