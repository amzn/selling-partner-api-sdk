<?php
/**
 * GenerateSelfShipAppointmentSlotsRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\GenerateSelfShipAppointmentSlotsRequest;

/**
 * GenerateSelfShipAppointmentSlotsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generateSelfShipAppointmentSlots&#x60; request.
 * @package     OpenAPI\Client
 */
class GenerateSelfShipAppointmentSlotsRequestTest extends TestCase
{

    private GenerateSelfShipAppointmentSlotsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateSelfShipAppointmentSlotsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateSelfShipAppointmentSlotsRequest"
     */
    public function testGenerateSelfShipAppointmentSlotsRequest()
    {
        $this->assertInstanceOf(GenerateSelfShipAppointmentSlotsRequest::class, $this->model);
    }

    /**
     * Test attribute "desired_end_date"
     */
    public function testPropertyDesiredEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDesiredEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getDesiredEndDate());
    }

    /**
     * Test attribute "desired_start_date"
     */
    public function testPropertyDesiredStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDesiredStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getDesiredStartDate());
    }
}
