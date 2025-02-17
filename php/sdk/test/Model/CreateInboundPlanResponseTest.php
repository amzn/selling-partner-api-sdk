<?php
/**
 * CreateInboundPlanResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\CreateInboundPlanResponse;

/**
 * CreateInboundPlanResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;createInboundPlan&#x60; response.
 * @package     SpApi
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
