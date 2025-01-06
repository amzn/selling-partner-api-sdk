<?php
/**
 * PutTransportDetailsResponseTest
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
use OpenAPI\Client\Model\fulfillmentInboundV0\PutTransportDetailsResponse;

/**
 * PutTransportDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Workflow status for a shipment with an Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class PutTransportDetailsResponseTest extends TestCase
{

    private PutTransportDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PutTransportDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PutTransportDetailsResponse"
     */
    public function testPutTransportDetailsResponse()
    {
        $this->assertInstanceOf(PutTransportDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInboundV0\CommonTransportResult();
        
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
