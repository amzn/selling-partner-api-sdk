<?php
/**
 * DirectPurchaseResponseTest
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
use OpenAPI\Client\Model\shipping\v2\DirectPurchaseResponse;

/**
 * DirectPurchaseResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the directPurchaseShipment operation.
 * @package     OpenAPI\Client
 */
class DirectPurchaseResponseTest extends TestCase
{

    private DirectPurchaseResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DirectPurchaseResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DirectPurchaseResponse"
     */
    public function testDirectPurchaseResponse()
    {
        $this->assertInstanceOf(DirectPurchaseResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\v2\DirectPurchaseResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
