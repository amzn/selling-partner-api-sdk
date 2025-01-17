<?php
/**
 * ReservationTest
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
use OpenAPI\Client\Model\services\Reservation;

/**
 * ReservationTest Class Doc Comment
 *
 * @category    Class
 * @description Reservation object reduces the capacity of a resource.
 * @package     OpenAPI\Client
 */
class ReservationTest extends TestCase
{

    private Reservation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Reservation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Reservation"
     */
    public function testReservation()
    {
        $this->assertInstanceOf(Reservation::class, $this->model);
    }

    /**
     * Test attribute "reservation_id"
     */
    public function testPropertyReservationId()
    {
        $testValue = 'test';
        
        $this->model->setReservationId($testValue);
        $this->assertEquals($testValue, $this->model->getReservationId());
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new Reservation();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
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
}
