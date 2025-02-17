<?php
/**
 * FixedSlotCapacityTest
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
use SpApi\Model\services\v1\FixedSlotCapacity;

/**
 * FixedSlotCapacityTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;getFixedSlotCapacity&#x60; operation.
 * @package     SpApi
 */
class FixedSlotCapacityTest extends TestCase
{

    private FixedSlotCapacity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FixedSlotCapacity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FixedSlotCapacity"
     */
    public function testFixedSlotCapacity()
    {
        $this->assertInstanceOf(FixedSlotCapacity::class, $this->model);
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
     * Test attribute "slot_duration"
     */
    public function testPropertySlotDuration()
    {
        $testValue = 1;
        
        $this->model->setSlotDuration($testValue);
        $this->assertEquals($testValue, $this->model->getSlotDuration());
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
