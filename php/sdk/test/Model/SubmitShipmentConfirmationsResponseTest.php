<?php
/**
 * SubmitShipmentConfirmationsResponseTest
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
use OpenAPI\Client\Model\vendor\shipments\v1\SubmitShipmentConfirmationsResponse;

/**
 * SubmitShipmentConfirmationsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the SubmitShipmentConfirmations operation.
 * @package     OpenAPI\Client
 */
class SubmitShipmentConfirmationsResponseTest extends TestCase
{

    private SubmitShipmentConfirmationsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitShipmentConfirmationsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitShipmentConfirmationsResponse"
     */
    public function testSubmitShipmentConfirmationsResponse()
    {
        $this->assertInstanceOf(SubmitShipmentConfirmationsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\v1\TransactionReference();
        
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
