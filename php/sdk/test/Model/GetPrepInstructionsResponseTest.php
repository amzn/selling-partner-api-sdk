<?php
/**
 * GetPrepInstructionsResponseTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinboundv0\GetPrepInstructionsResponse;

/**
 * GetPrepInstructionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getPrepInstructions operation.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinboundv0\GetPrepInstructionsResult();
        
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
