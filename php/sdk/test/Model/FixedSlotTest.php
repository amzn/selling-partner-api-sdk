<?php
/**
 * FixedSlotTest
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
use SpApi\Model\services\v1\FixedSlot;

/**
 * FixedSlotTest Class Doc Comment
 *
 * @category    Class
 * @description In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration.
 * @package     SpApi
 */
class FixedSlotTest extends TestCase
{

    private FixedSlot $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FixedSlot();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FixedSlot"
     */
    public function testFixedSlot()
    {
        $this->assertInstanceOf(FixedSlot::class, $this->model);
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
     * Test attribute "scheduled_capacity"
     */
    public function testPropertyScheduledCapacity()
    {
        $testValue = 123;
        
        $this->model->setScheduledCapacity($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledCapacity());
    }

    /**
     * Test attribute "available_capacity"
     */
    public function testPropertyAvailableCapacity()
    {
        $testValue = 123;
        
        $this->model->setAvailableCapacity($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableCapacity());
    }

    /**
     * Test attribute "encumbered_capacity"
     */
    public function testPropertyEncumberedCapacity()
    {
        $testValue = 123;
        
        $this->model->setEncumberedCapacity($testValue);
        $this->assertEquals($testValue, $this->model->getEncumberedCapacity());
    }

    /**
     * Test attribute "reserved_capacity"
     */
    public function testPropertyReservedCapacity()
    {
        $testValue = 123;
        
        $this->model->setReservedCapacity($testValue);
        $this->assertEquals($testValue, $this->model->getReservedCapacity());
    }
}
