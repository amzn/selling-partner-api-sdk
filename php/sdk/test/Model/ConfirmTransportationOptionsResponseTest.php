<?php
/**
 * ConfirmTransportationOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ConfirmTransportationOptionsResponse;

/**
 * ConfirmTransportationOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;confirmTransportationOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class ConfirmTransportationOptionsResponseTest extends TestCase
{

    private ConfirmTransportationOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmTransportationOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmTransportationOptionsResponse"
     */
    public function testConfirmTransportationOptionsResponse()
    {
        $this->assertInstanceOf(ConfirmTransportationOptionsResponse::class, $this->model);
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
