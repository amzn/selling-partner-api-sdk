<?php
/**
 * GetBillOfLadingResponseTest
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
use SpApi\Model\fulfillment\inbound\v0\GetBillOfLadingResponse;

/**
 * GetBillOfLadingResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getBillOfLading operation.
 * @package     SpApi
 */
class GetBillOfLadingResponseTest extends TestCase
{

    private GetBillOfLadingResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetBillOfLadingResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetBillOfLadingResponse"
     */
    public function testGetBillOfLadingResponse()
    {
        $this->assertInstanceOf(GetBillOfLadingResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\BillOfLadingDownloadURL();
        
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
