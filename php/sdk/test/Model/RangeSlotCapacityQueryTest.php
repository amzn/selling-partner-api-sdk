<?php
/**
 * RangeSlotCapacityQueryTest
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
use SpApi\Model\services\v1\RangeSlotCapacityQuery;

/**
 * RangeSlotCapacityQueryTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema for the &#x60;getRangeSlotCapacity&#x60; operation. This schema is used to define the time range and capacity types that are being queried.
 * @package     SpApi
 */
class RangeSlotCapacityQueryTest extends TestCase
{

    private RangeSlotCapacityQuery $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RangeSlotCapacityQuery();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RangeSlotCapacityQuery"
     */
    public function testRangeSlotCapacityQuery()
    {
        $this->assertInstanceOf(RangeSlotCapacityQuery::class, $this->model);
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
