<?php
/**
 * DirectPurchaseResponseTest
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
use SpApi\Model\shipping\v2\DirectPurchaseResponse;

/**
 * DirectPurchaseResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the directPurchaseShipment operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\shipping\v2\DirectPurchaseResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
