<?php
/**
 * GetPrepInstructionsResponseTest
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
use SpApi\Model\fulfillment\inbound\v0\GetPrepInstructionsResponse;

/**
 * GetPrepInstructionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getPrepInstructions operation.
 * @package     SpApi
 */
class GetPrepInstructionsResponseTest extends TestCase
{

    private GetPrepInstructionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPrepInstructionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPrepInstructionsResponse"
     */
    public function testGetPrepInstructionsResponse()
    {
        $this->assertInstanceOf(GetPrepInstructionsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\GetPrepInstructionsResult();
        
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
