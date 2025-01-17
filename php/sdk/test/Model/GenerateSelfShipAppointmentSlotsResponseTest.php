<?php
/**
 * GenerateSelfShipAppointmentSlotsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\GenerateSelfShipAppointmentSlotsResponse;

/**
 * GenerateSelfShipAppointmentSlotsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generateSelfShipAppointmentSlots&#x60; response.
 * @package     OpenAPI\Client
 */
class GenerateSelfShipAppointmentSlotsResponseTest extends TestCase
{

    private GenerateSelfShipAppointmentSlotsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateSelfShipAppointmentSlotsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateSelfShipAppointmentSlotsResponse"
     */
    public function testGenerateSelfShipAppointmentSlotsResponse()
    {
        $this->assertInstanceOf(GenerateSelfShipAppointmentSlotsResponse::class, $this->model);
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }
}
