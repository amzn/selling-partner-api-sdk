<?php
/**
 * CreateInboundShipmentPlanResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\CreateInboundShipmentPlanResult;

/**
 * CreateInboundShipmentPlanResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the create inbound shipment operation
 * @package     OpenAPI\Client
 */
class CreateInboundShipmentPlanResultTest extends TestCase
{

    private CreateInboundShipmentPlanResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInboundShipmentPlanResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInboundShipmentPlanResult"
     */
    public function testCreateInboundShipmentPlanResult()
    {
        $this->assertInstanceOf(CreateInboundShipmentPlanResult::class, $this->model);
    }

    /**
     * Test attribute "inbound_shipment_plans"
     */
    public function testPropertyInboundShipmentPlans()
    {
        $testValue = [];
        
        $this->model->setInboundShipmentPlans($testValue);
        $this->assertEquals($testValue, $this->model->getInboundShipmentPlans());
    }
}
