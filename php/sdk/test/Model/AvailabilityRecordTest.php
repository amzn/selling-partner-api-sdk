<?php
/**
 * AvailabilityRecordTest
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
use OpenAPI\Client\Model\services\AvailabilityRecord;

/**
 * AvailabilityRecordTest Class Doc Comment
 *
 * @category    Class
 * @description &#x60;AvailabilityRecord&#x60; to represent the capacity of a resource over a time range.
 * @package     OpenAPI\Client
 */
class AvailabilityRecordTest extends TestCase
{

    private AvailabilityRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AvailabilityRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AvailabilityRecord"
     */
    public function testAvailabilityRecord()
    {
        $this->assertInstanceOf(AvailabilityRecord::class, $this->model);
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }

    /**
     * Test attribute "recurrence"
     */
    public function testPropertyRecurrence()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\Recurrence();
        
        $this->model->setRecurrence($testValue);
        $this->assertEquals($testValue, $this->model->getRecurrence());
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
