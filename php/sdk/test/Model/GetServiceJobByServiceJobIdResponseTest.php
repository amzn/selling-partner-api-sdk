<?php
/**
 * GetServiceJobByServiceJobIdResponseTest
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
use SpApi\Model\services\v1\GetServiceJobByServiceJobIdResponse;

/**
 * GetServiceJobByServiceJobIdResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getServiceJobByServiceJobId&#x60; operation.
 * @package     SpApi
 */
class GetServiceJobByServiceJobIdResponseTest extends TestCase
{

    private GetServiceJobByServiceJobIdResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetServiceJobByServiceJobIdResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetServiceJobByServiceJobIdResponse"
     */
    public function testGetServiceJobByServiceJobIdResponse()
    {
        $this->assertInstanceOf(GetServiceJobByServiceJobIdResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\services\v1\ServiceJob();
        
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
