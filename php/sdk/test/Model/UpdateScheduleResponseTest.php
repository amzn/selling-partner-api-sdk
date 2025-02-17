<?php
/**
 * UpdateScheduleResponseTest
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
use SpApi\Model\services\v1\UpdateScheduleResponse;

/**
 * UpdateScheduleResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;updateSchedule&#x60; operation.
 * @package     SpApi
 */
class UpdateScheduleResponseTest extends TestCase
{

    private UpdateScheduleResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateScheduleResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateScheduleResponse"
     */
    public function testUpdateScheduleResponse()
    {
        $this->assertInstanceOf(UpdateScheduleResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = [];
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
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
