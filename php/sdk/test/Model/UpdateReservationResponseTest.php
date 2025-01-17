<?php
/**
 * UpdateReservationResponseTest
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
use OpenAPI\Client\Model\services\UpdateReservationResponse;

/**
 * UpdateReservationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;updateReservation&#x60; operation.
 * @package     OpenAPI\Client
 */
class UpdateReservationResponseTest extends TestCase
{

    private UpdateReservationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateReservationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateReservationResponse"
     */
    public function testUpdateReservationResponse()
    {
        $this->assertInstanceOf(UpdateReservationResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\UpdateReservationRecord();
        
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
