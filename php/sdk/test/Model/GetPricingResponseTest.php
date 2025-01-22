<?php
/**
 * GetPricingResponseTest
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
use OpenAPI\Client\Model\pricing\v0\GetPricingResponse;

/**
 * GetPricingResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getPricing&#x60; and &#x60;getCompetitivePricing&#x60; operations.
 * @package     OpenAPI\Client
 */
class GetPricingResponseTest extends TestCase
{

    private GetPricingResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPricingResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPricingResponse"
     */
    public function testGetPricingResponse()
    {
        $this->assertInstanceOf(GetPricingResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = [];
        
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
