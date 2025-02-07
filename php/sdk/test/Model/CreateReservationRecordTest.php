<?php
/**
 * CreateReservationRecordTest
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
use OpenAPI\Client\Model\services\v1\CreateReservationRecord;

/**
 * CreateReservationRecordTest Class Doc Comment
 *
 * @category    Class
 * @description &#x60;CreateReservationRecord&#x60; entity contains the &#x60;Reservation&#x60; if there is an error/warning while performing the requested operation on it, otherwise it will contain the new &#x60;reservationId&#x60;.
 * @package     OpenAPI\Client
 */
class CreateReservationRecordTest extends TestCase
{

    private CreateReservationRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateReservationRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateReservationRecord"
     */
    public function testCreateReservationRecord()
    {
        $this->assertInstanceOf(CreateReservationRecord::class, $this->model);
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
