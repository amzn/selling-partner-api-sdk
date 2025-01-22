<?php
/**
 * GetMyFeesEstimateResponseTest
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
use OpenAPI\Client\Model\productFees\GetMyFeesEstimateResponse;

/**
 * GetMyFeesEstimateResponseTest Class Doc Comment
 *
 * @category    Class
 * @description GetMyFeesEstimateResponse
 * @package     OpenAPI\Client
 */
class GetMyFeesEstimateResponseTest extends TestCase
{

    private GetMyFeesEstimateResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMyFeesEstimateResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMyFeesEstimateResponse"
     */
    public function testGetMyFeesEstimateResponse()
    {
        $this->assertInstanceOf(GetMyFeesEstimateResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\productFees\GetMyFeesEstimateResult();
        
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
