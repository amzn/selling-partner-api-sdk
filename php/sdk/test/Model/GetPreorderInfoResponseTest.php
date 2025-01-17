<?php
/**
 * GetPreorderInfoResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\GetPreorderInfoResponse;

/**
 * GetPreorderInfoResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getPreorderInfo operation.
 * @package     OpenAPI\Client
 */
class GetPreorderInfoResponseTest extends TestCase
{

    private GetPreorderInfoResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPreorderInfoResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPreorderInfoResponse"
     */
    public function testGetPreorderInfoResponse()
    {
        $this->assertInstanceOf(GetPreorderInfoResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\GetPreorderInfoResult();
        
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
