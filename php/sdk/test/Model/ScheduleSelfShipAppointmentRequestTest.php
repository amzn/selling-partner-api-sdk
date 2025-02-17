<?php
/**
 * ScheduleSelfShipAppointmentRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ScheduleSelfShipAppointmentRequest;

/**
 * ScheduleSelfShipAppointmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;scheduleSelfShipAppointment&#x60; request.
 * @package     SpApi
 */
class ScheduleSelfShipAppointmentRequestTest extends TestCase
{

    private ScheduleSelfShipAppointmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduleSelfShipAppointmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduleSelfShipAppointmentRequest"
     */
    public function testScheduleSelfShipAppointmentRequest()
    {
        $this->assertInstanceOf(ScheduleSelfShipAppointmentRequest::class, $this->model);
    }

    /**
     * Test attribute "reason_comment"
     */
    public function testPropertyReasonComment()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\ReasonComment();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setReasonComment($testValue);
        $this->assertEquals($testValue, $this->model->getReasonComment());
    }
}
