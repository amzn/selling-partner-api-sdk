<?php
/**
 * CancelShipmentResponseTest
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
use OpenAPI\Client\Model\merchantFulfillment\CancelShipmentResponse;

/**
 * CancelShipmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     OpenAPI\Client
 */
class CancelShipmentResponseTest extends TestCase
{

    private CancelShipmentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CancelShipmentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CancelShipmentResponse"
     */
    public function testCancelShipmentResponse()
    {
        $this->assertInstanceOf(CancelShipmentResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\Shipment();
        
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
