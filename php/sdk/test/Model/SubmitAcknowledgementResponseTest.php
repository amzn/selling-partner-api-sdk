<?php
/**
 * SubmitAcknowledgementResponseTest
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
use OpenAPI\Client\Model\vendor.df.orders\SubmitAcknowledgementResponse;

/**
 * SubmitAcknowledgementResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the submitAcknowledgement operation.
 * @package     OpenAPI\Client
 */
class SubmitAcknowledgementResponseTest extends TestCase
{

    private SubmitAcknowledgementResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitAcknowledgementResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitAcknowledgementResponse"
     */
    public function testSubmitAcknowledgementResponse()
    {
        $this->assertInstanceOf(SubmitAcknowledgementResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.orders\TransactionId();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.orders\ErrorList();
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
