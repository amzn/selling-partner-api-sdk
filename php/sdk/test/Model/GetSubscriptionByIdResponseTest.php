<?php
/**
 * GetSubscriptionByIdResponseTest
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
use SpApi\Model\notifications\v1\GetSubscriptionByIdResponse;

/**
 * GetSubscriptionByIdResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getSubscriptionById&#x60; operation.
 * @package     SpApi
 */
class GetSubscriptionByIdResponseTest extends TestCase
{

    private GetSubscriptionByIdResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSubscriptionByIdResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSubscriptionByIdResponse"
     */
    public function testGetSubscriptionByIdResponse()
    {
        $this->assertInstanceOf(GetSubscriptionByIdResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\Subscription();
        
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
