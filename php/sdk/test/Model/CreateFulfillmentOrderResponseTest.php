<?php
/**
 * CreateFulfillmentOrderResponseTest
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
use OpenAPI\Client\Model\fulfillment\outbound\CreateFulfillmentOrderResponse;

/**
 * CreateFulfillmentOrderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;createFulfillmentOrder&#x60; operation.
 * @package     OpenAPI\Client
 */
class CreateFulfillmentOrderResponseTest extends TestCase
{

    private CreateFulfillmentOrderResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFulfillmentOrderResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFulfillmentOrderResponse"
     */
    public function testCreateFulfillmentOrderResponse()
    {
        $this->assertInstanceOf(CreateFulfillmentOrderResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
