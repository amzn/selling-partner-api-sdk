<?php
/**
 * CreateInboundShipmentPlanRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\CreateInboundShipmentPlanRequest;

/**
 * CreateInboundShipmentPlanRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the createInboundShipmentPlan operation.
 * @package     OpenAPI\Client
 */
class CreateInboundShipmentPlanRequestTest extends TestCase
{

    private CreateInboundShipmentPlanRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInboundShipmentPlanRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInboundShipmentPlanRequest"
     */
    public function testCreateInboundShipmentPlanRequest()
    {
        $this->assertInstanceOf(CreateInboundShipmentPlanRequest::class, $this->model);
    }

    /**
     * Test attribute "ship_from_address"
     */
    public function testPropertyShipFromAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
    }

    /**
     * Test attribute "label_prep_preference"
     */
    public function testPropertyLabelPrepPreference()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\LabelPrepPreference();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelPrepPreference($testValue);
        $this->assertEquals($testValue, $this->model->getLabelPrepPreference());
    }

    /**
     * Test attribute "ship_to_country_code"
     */
    public function testPropertyShipToCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setShipToCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getShipToCountryCode());
    }

    /**
     * Test attribute "ship_to_country_subdivision_code"
     */
    public function testPropertyShipToCountrySubdivisionCode()
    {
        $testValue = 'test';
        
        $this->model->setShipToCountrySubdivisionCode($testValue);
        $this->assertEquals($testValue, $this->model->getShipToCountrySubdivisionCode());
    }

    /**
     * Test attribute "inbound_shipment_plan_request_items"
     */
    public function testPropertyInboundShipmentPlanRequestItems()
    {
        $testValue = [];
        
        $this->model->setInboundShipmentPlanRequestItems($testValue);
        $this->assertEquals($testValue, $this->model->getInboundShipmentPlanRequestItems());
    }
}
