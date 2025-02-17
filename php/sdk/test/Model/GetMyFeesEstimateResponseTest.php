<?php
/**
 * GetMyFeesEstimateResponseTest
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
use SpApi\Model\productFees\v0\GetMyFeesEstimateResponse;

/**
 * GetMyFeesEstimateResponseTest Class Doc Comment
 *
 * @category    Class
 * @description GetMyFeesEstimateResponse
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\productFees\v0\GetMyFeesEstimateResult();
        
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
