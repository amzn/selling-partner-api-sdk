<?php
/**
 * FixedSlotCapacityQueryTest
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
use SpApi\Model\services\v1\FixedSlotCapacityQuery;

/**
 * FixedSlotCapacityQueryTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema for the &#x60;getFixedSlotCapacity&#x60; operation. This schema is used to define the time range, capacity types and slot duration which are being queried.
 * @package     SpApi
 */
class FixedSlotCapacityQueryTest extends TestCase
{

    private FixedSlotCapacityQuery $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FixedSlotCapacityQuery();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FixedSlotCapacityQuery"
     */
    public function testFixedSlotCapacityQuery()
    {
        $this->assertInstanceOf(FixedSlotCapacityQuery::class, $this->model);
    }

    /**
     * Test attribute "capacity_types"
     */
    public function testPropertyCapacityTypes()
    {
        $testValue = [];
        
        $this->model->setCapacityTypes($testValue);
        $this->assertEquals($testValue, $this->model->getCapacityTypes());
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
     * Test attribute "start_date_time"
     */
    public function testPropertyStartDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartDateTime());
    }

    /**
     * Test attribute "end_date_time"
     */
    public function testPropertyEndDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndDateTime());
    }
}
