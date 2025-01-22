<?php
/**
 * ConfirmPreorderResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\ConfirmPreorderResponse;

/**
 * ConfirmPreorderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the confirmPreorder operation.
 * @package     OpenAPI\Client
 */
class ConfirmPreorderResponseTest extends TestCase
{

    private ConfirmPreorderResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConfirmPreorderResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConfirmPreorderResponse"
     */
    public function testConfirmPreorderResponse()
    {
        $this->assertInstanceOf(ConfirmPreorderResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\ConfirmPreorderResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
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
