<?php
/**
 * UpdateScheduleRecordTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\services\UpdateScheduleRecord;

/**
 * UpdateScheduleRecordTest Class Doc Comment
 *
 * @category    Class
 * @description &#x60;UpdateScheduleRecord&#x60; entity contains the &#x60;AvailabilityRecord&#x60; if there is an error/warning while performing the requested operation on it.
 * @package     OpenAPI\Client
 */
class UpdateScheduleRecordTest extends TestCase
{

    private UpdateScheduleRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateScheduleRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateScheduleRecord"
     */
    public function testUpdateScheduleRecord()
    {
        $this->assertInstanceOf(UpdateScheduleRecord::class, $this->model);
    }

    /**
     * Test attribute "availability"
     */
    public function testPropertyAvailability()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\AvailabilityRecord();
        
        $this->model->setAvailability($testValue);
        $this->assertEquals($testValue, $this->model->getAvailability());
    }

    /**
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
