<?php
/**
 * CreateInboundPlanResponseTest
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
use OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanResponse;

/**
 * CreateInboundPlanResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;createInboundPlan&#x60; response.
 * @package     OpenAPI\Client
 */
class CreateInboundPlanResponseTest extends TestCase
{

    private CreateInboundPlanResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInboundPlanResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInboundPlanResponse"
     */
    public function testCreateInboundPlanResponse()
    {
        $this->assertInstanceOf(CreateInboundPlanResponse::class, $this->model);
    }

    /**
     * Test attribute "inbound_plan_id"
     */
    public function testPropertyInboundPlanId()
    {
        $testValue = 'test';
        
        $this->model->setInboundPlanId($testValue);
        $this->assertEquals($testValue, $this->model->getInboundPlanId());
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
