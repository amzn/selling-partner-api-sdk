<?php
/**
 * UpdateReservationRequestTest
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
use OpenAPI\Client\Model\services\v1\UpdateReservationRequest;

/**
 * UpdateReservationRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema for the &#x60;updateReservation&#x60; operation.
 * @package     OpenAPI\Client
 */
class UpdateReservationRequestTest extends TestCase
{

    private UpdateReservationRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateReservationRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateReservationRequest"
     */
    public function testUpdateReservationRequest()
    {
        $this->assertInstanceOf(UpdateReservationRequest::class, $this->model);
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
     * Test attribute "reservation"
     */
    public function testPropertyReservation()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\v1\Reservation();
        
        $this->model->setReservation($testValue);
        $this->assertEquals($testValue, $this->model->getReservation());
    }
}
