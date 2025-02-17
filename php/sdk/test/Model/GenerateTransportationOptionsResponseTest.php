<?php
/**
 * GenerateTransportationOptionsResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\GenerateTransportationOptionsResponse;

/**
 * GenerateTransportationOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generateTransportationOptions&#x60; response.
 * @package     SpApi
 */
class GenerateTransportationOptionsResponseTest extends TestCase
{

    private GenerateTransportationOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateTransportationOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateTransportationOptionsResponse"
     */
    public function testGenerateTransportationOptionsResponse()
    {
        $this->assertInstanceOf(GenerateTransportationOptionsResponse::class, $this->model);
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }
}
