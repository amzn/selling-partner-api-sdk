<?php
/**
 * GetEligibleShipmentServicesResponseTest
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
use OpenAPI\Client\Model\merchantfulfillment\GetEligibleShipmentServicesResponse;

/**
 * GetEligibleShipmentServicesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     OpenAPI\Client
 */
class GetEligibleShipmentServicesResponseTest extends TestCase
{

    private GetEligibleShipmentServicesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetEligibleShipmentServicesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetEligibleShipmentServicesResponse"
     */
    public function testGetEligibleShipmentServicesResponse()
    {
        $this->assertInstanceOf(GetEligibleShipmentServicesResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\GetEligibleShipmentServicesResult();
        
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
