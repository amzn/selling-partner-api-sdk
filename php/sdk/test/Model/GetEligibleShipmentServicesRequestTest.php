<?php
/**
 * GetEligibleShipmentServicesRequestTest
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
use OpenAPI\Client\Model\merchantFulfillment\v0\GetEligibleShipmentServicesRequest;

/**
 * GetEligibleShipmentServicesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema.
 * @package     OpenAPI\Client
 */
class GetEligibleShipmentServicesRequestTest extends TestCase
{

    private GetEligibleShipmentServicesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetEligibleShipmentServicesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetEligibleShipmentServicesRequest"
     */
    public function testGetEligibleShipmentServicesRequest()
    {
        $this->assertInstanceOf(GetEligibleShipmentServicesRequest::class, $this->model);
    }

    /**
     * Test attribute "shipment_request_details"
     */
    public function testPropertyShipmentRequestDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\v0\ShipmentRequestDetails();
        
        $this->model->setShipmentRequestDetails($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentRequestDetails());
    }

    /**
     * Test attribute "shipping_offering_filter"
     */
    public function testPropertyShippingOfferingFilter()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\v0\ShippingOfferingFilter();
        
        $this->model->setShippingOfferingFilter($testValue);
        $this->assertEquals($testValue, $this->model->getShippingOfferingFilter());
    }
}
