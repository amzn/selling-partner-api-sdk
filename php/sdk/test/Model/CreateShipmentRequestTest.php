<?php
/**
 * CreateShipmentRequestTest
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
use OpenAPI\Client\Model\merchantfulfillment\CreateShipmentRequest;

/**
 * CreateShipmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema.
 * @package     OpenAPI\Client
 */
class CreateShipmentRequestTest extends TestCase
{

    private CreateShipmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateShipmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateShipmentRequest"
     */
    public function testCreateShipmentRequest()
    {
        $this->assertInstanceOf(CreateShipmentRequest::class, $this->model);
    }

    /**
     * Test attribute "shipment_request_details"
     */
    public function testPropertyShipmentRequestDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\ShipmentRequestDetails();
        
        $this->model->setShipmentRequestDetails($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentRequestDetails());
    }

    /**
     * Test attribute "shipping_service_id"
     */
    public function testPropertyShippingServiceId()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceId());
    }

    /**
     * Test attribute "shipping_service_offer_id"
     */
    public function testPropertyShippingServiceOfferId()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceOfferId($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceOfferId());
    }

    /**
     * Test attribute "hazmat_type"
     */
    public function testPropertyHazmatType()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantfulfillment\HazmatType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setHazmatType($testValue);
        $this->assertEquals($testValue, $this->model->getHazmatType());
    }

    /**
     * Test attribute "label_format_option"
     */
    public function testPropertyLabelFormatOption()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\LabelFormatOptionRequest();
        
        $this->model->setLabelFormatOption($testValue);
        $this->assertEquals($testValue, $this->model->getLabelFormatOption());
    }

    /**
     * Test attribute "shipment_level_seller_inputs_list"
     */
    public function testPropertyShipmentLevelSellerInputsList()
    {
        $testValue = [];
        
        $this->model->setShipmentLevelSellerInputsList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentLevelSellerInputsList());
    }
}
