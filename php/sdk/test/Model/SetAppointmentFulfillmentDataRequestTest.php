<?php
/**
 * SetAppointmentFulfillmentDataRequestTest
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
use SpApi\Model\services\v1\SetAppointmentFulfillmentDataRequest;

/**
 * SetAppointmentFulfillmentDataRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Input for set appointment fulfillment data operation.
 * @package     SpApi
 */
class SetAppointmentFulfillmentDataRequestTest extends TestCase
{

    private SetAppointmentFulfillmentDataRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SetAppointmentFulfillmentDataRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SetAppointmentFulfillmentDataRequest"
     */
    public function testSetAppointmentFulfillmentDataRequest()
    {
        $this->assertInstanceOf(SetAppointmentFulfillmentDataRequest::class, $this->model);
    }

    /**
     * Test attribute "fulfillment_time"
     */
    public function testPropertyFulfillmentTime()
    {
        
        $testValue = new \SpApi\Model\services\v1\FulfillmentTime();
        
        $this->model->setFulfillmentTime($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentTime());
    }

    /**
     * Test attribute "appointment_resources"
     */
    public function testPropertyAppointmentResources()
    {
        $testValue = [];
        
        $this->model->setAppointmentResources($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentResources());
    }

    /**
     * Test attribute "fulfillment_documents"
     */
    public function testPropertyFulfillmentDocuments()
    {
        $testValue = [];
        
        $this->model->setFulfillmentDocuments($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentDocuments());
    }
}
