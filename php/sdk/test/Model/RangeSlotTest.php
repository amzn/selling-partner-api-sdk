<?php
/**
 * RangeSlotTest
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
use SpApi\Model\services\v1\RangeSlot;

/**
 * RangeSlotTest Class Doc Comment
 *
 * @category    Class
 * @description Capacity slots represented in a format similar to availability rules.
 * @package     SpApi
 */
class RangeSlotTest extends TestCase
{

    private RangeSlot $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RangeSlot();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RangeSlot"
     */
    public function testRangeSlot()
    {
        $this->assertInstanceOf(RangeSlot::class, $this->model);
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

    /**
     * Test attribute "capacity"
     */
    public function testPropertyCapacity()
    {
        $testValue = 123;
        
        $this->model->setCapacity($testValue);
        $this->assertEquals($testValue, $this->model->getCapacity());
    }
}
