<?php
/**
 * PurchaseShipmentResponseTest
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
use SpApi\Model\shipping\v2\PurchaseShipmentResponse;

/**
 * PurchaseShipmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the purchaseShipment operation.
 * @package     SpApi
 */
class PurchaseShipmentResponseTest extends TestCase
{

    private PurchaseShipmentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PurchaseShipmentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PurchaseShipmentResponse"
     */
    public function testPurchaseShipmentResponse()
    {
        $this->assertInstanceOf(PurchaseShipmentResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\PurchaseShipmentResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
