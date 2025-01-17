<?php
/**
 * CreateSubscriptionResponseTest
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
use OpenAPI\Client\Model\notifications\CreateSubscriptionResponse;

/**
 * CreateSubscriptionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;createSubscription&#x60; operation.
 * @package     OpenAPI\Client
 */
class CreateSubscriptionResponseTest extends TestCase
{

    private CreateSubscriptionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateSubscriptionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateSubscriptionResponse"
     */
    public function testCreateSubscriptionResponse()
    {
        $this->assertInstanceOf(CreateSubscriptionResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\notifications\Subscription();
        
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
