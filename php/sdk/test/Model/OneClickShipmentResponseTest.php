<?php
/**
 * OneClickShipmentResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\shipping\v2\OneClickShipmentResponse;

/**
 * OneClickShipmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the OneClickShipment operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\shipping\v2\OneClickShipmentResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
