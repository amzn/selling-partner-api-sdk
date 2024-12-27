<?php
/**
 * CancelSelfShipAppointmentResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\CancelSelfShipAppointmentResponse;

/**
 * CancelSelfShipAppointmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;CancelSelfShipAppointment&#x60; response.
 * @package     OpenAPI\Client
 */
class CancelSelfShipAppointmentResponseTest extends TestCase
{

    private CancelSelfShipAppointmentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CancelSelfShipAppointmentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CancelSelfShipAppointmentResponse"
     */
    public function testCancelSelfShipAppointmentResponse()
    {
        $this->assertInstanceOf(CancelSelfShipAppointmentResponse::class, $this->model);
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
