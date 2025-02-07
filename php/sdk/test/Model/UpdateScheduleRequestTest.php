<?php
/**
 * UpdateScheduleRequestTest
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
use OpenAPI\Client\Model\services\v1\UpdateScheduleRequest;

/**
 * UpdateScheduleRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema for the &#x60;updateSchedule&#x60; operation.
 * @package     OpenAPI\Client
 */
class UpdateScheduleRequestTest extends TestCase
{

    private UpdateScheduleRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateScheduleRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateScheduleRequest"
     */
    public function testUpdateScheduleRequest()
    {
        $this->assertInstanceOf(UpdateScheduleRequest::class, $this->model);
    }

    /**
     * Test attribute "schedules"
     */
    public function testPropertySchedules()
    {
        $testValue = [];
        
        $this->model->setSchedules($testValue);
        $this->assertEquals($testValue, $this->model->getSchedules());
    }
}
