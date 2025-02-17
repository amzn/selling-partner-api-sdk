<?php
/**
 * GenerateDeliveryWindowOptionsResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\GenerateDeliveryWindowOptionsResponse;

/**
 * GenerateDeliveryWindowOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generateDeliveryWindowOptions&#x60; response.
 * @package     SpApi
 */
class GenerateDeliveryWindowOptionsResponseTest extends TestCase
{

    private GenerateDeliveryWindowOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateDeliveryWindowOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateDeliveryWindowOptionsResponse"
     */
    public function testGenerateDeliveryWindowOptionsResponse()
    {
        $this->assertInstanceOf(GenerateDeliveryWindowOptionsResponse::class, $this->model);
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
