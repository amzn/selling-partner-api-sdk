<?php
/**
 * GetAdditionalInputsResponseTest
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
use SpApi\Model\shipping\v2\GetAdditionalInputsResponse;

/**
 * GetAdditionalInputsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getAdditionalInputs operation.
 * @package     SpApi
 */
class GetAdditionalInputsResponseTest extends TestCase
{

    private GetAdditionalInputsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAdditionalInputsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAdditionalInputsResponse"
     */
    public function testGetAdditionalInputsResponse()
    {
        $this->assertInstanceOf(GetAdditionalInputsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = array();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
