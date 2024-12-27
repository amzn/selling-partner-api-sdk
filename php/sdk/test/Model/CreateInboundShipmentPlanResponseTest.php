<?php
/**
 * CreateInboundShipmentPlanResponseTest
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
use OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanResponse;

/**
 * CreateInboundShipmentPlanResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the createInboundShipmentPlan operation.
 * @package     OpenAPI\Client
 */
class CreateInboundShipmentPlanResponseTest extends TestCase
{

    private CreateInboundShipmentPlanResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInboundShipmentPlanResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInboundShipmentPlanResponse"
     */
    public function testCreateInboundShipmentPlanResponse()
    {
        $this->assertInstanceOf(CreateInboundShipmentPlanResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinboundv0\CreateInboundShipmentPlanResult();
        
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
