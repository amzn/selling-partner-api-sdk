<?php
/**
 * GetEligibleShipmentServicesResultTest
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
use OpenAPI\Client\Model\merchantFulfillment\GetEligibleShipmentServicesResult;

/**
 * GetEligibleShipmentServicesResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;getEligibleShipmentServices&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetEligibleShipmentServicesResultTest extends TestCase
{

    private GetEligibleShipmentServicesResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetEligibleShipmentServicesResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetEligibleShipmentServicesResult"
     */
    public function testGetEligibleShipmentServicesResult()
    {
        $this->assertInstanceOf(GetEligibleShipmentServicesResult::class, $this->model);
    }

    /**
     * Test attribute "shipping_service_list"
     */
    public function testPropertyShippingServiceList()
    {
        $testValue = [];
        
        $this->model->setShippingServiceList($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceList());
    }

    /**
     * Test attribute "rejected_shipping_service_list"
     */
    public function testPropertyRejectedShippingServiceList()
    {
        $testValue = [];
        
        $this->model->setRejectedShippingServiceList($testValue);
        $this->assertEquals($testValue, $this->model->getRejectedShippingServiceList());
    }

    /**
     * Test attribute "temporarily_unavailable_carrier_list"
     */
    public function testPropertyTemporarilyUnavailableCarrierList()
    {
        $testValue = [];
        
        $this->model->setTemporarilyUnavailableCarrierList($testValue);
        $this->assertEquals($testValue, $this->model->getTemporarilyUnavailableCarrierList());
    }

    /**
     * Test attribute "terms_and_conditions_not_accepted_carrier_list"
     */
    public function testPropertyTermsAndConditionsNotAcceptedCarrierList()
    {
        $testValue = [];
        
        $this->model->setTermsAndConditionsNotAcceptedCarrierList($testValue);
        $this->assertEquals($testValue, $this->model->getTermsAndConditionsNotAcceptedCarrierList());
    }
}
