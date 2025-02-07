<?php
/**
 * GetShipmentDetailsResponseTest
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
use OpenAPI\Client\Model\invoicing\v0\GetShipmentDetailsResponse;

/**
 * GetShipmentDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getShipmentDetails operation.
 * @package     OpenAPI\Client
 */
class GetShipmentDetailsResponseTest extends TestCase
{

    private GetShipmentDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentDetailsResponse"
     */
    public function testGetShipmentDetailsResponse()
    {
        $this->assertInstanceOf(GetShipmentDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\invoicing\v0\ShipmentDetail();
        
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
