<?php
/**
 * PurchaseShipmentResponseTest
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
use OpenAPI\Client\Model\shipping\PurchaseShipmentResponse;

/**
 * PurchaseShipmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the purchaseShipment operation.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\shipping\PurchaseShipmentResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
