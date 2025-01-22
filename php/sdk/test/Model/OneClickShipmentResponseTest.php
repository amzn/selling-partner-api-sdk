<?php
/**
 * OneClickShipmentResponseTest
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
use OpenAPI\Client\Model\shipping\OneClickShipmentResponse;

/**
 * OneClickShipmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the OneClickShipment operation.
 * @package     OpenAPI\Client
 */
class OneClickShipmentResponseTest extends TestCase
{

    private OneClickShipmentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OneClickShipmentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OneClickShipmentResponse"
     */
    public function testOneClickShipmentResponse()
    {
        $this->assertInstanceOf(OneClickShipmentResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\OneClickShipmentResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
