<?php
/**
 * ConfirmDeliveryWindowOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ConfirmDeliveryWindowOptionsResponse;

/**
 * ConfirmDeliveryWindowOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;confirmDeliveryWindowOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class ConfirmDeliveryWindowOptionsResponseTest extends TestCase
{

    private ConfirmDeliveryWindowOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmDeliveryWindowOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmDeliveryWindowOptionsResponse"
     */
    public function testConfirmDeliveryWindowOptionsResponse()
    {
        $this->assertInstanceOf(ConfirmDeliveryWindowOptionsResponse::class, $this->model);
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
