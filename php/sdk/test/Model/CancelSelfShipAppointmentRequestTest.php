<?php
/**
 * CancelSelfShipAppointmentRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\CancelSelfShipAppointmentRequest;

/**
 * CancelSelfShipAppointmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;cancelSelfShipAppointment&#x60; request.
 * @package     OpenAPI\Client
 */
class CancelSelfShipAppointmentRequestTest extends TestCase
{

    private CancelSelfShipAppointmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CancelSelfShipAppointmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CancelSelfShipAppointmentRequest"
     */
    public function testCancelSelfShipAppointmentRequest()
    {
        $this->assertInstanceOf(CancelSelfShipAppointmentRequest::class, $this->model);
    }

    /**
     * Test attribute "reason_comment"
     */
    public function testPropertyReasonComment()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ReasonComment();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setReasonComment($testValue);
        $this->assertEquals($testValue, $this->model->getReasonComment());
    }
}
