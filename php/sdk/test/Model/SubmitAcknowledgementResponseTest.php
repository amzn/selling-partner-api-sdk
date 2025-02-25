<?php
/**
 * SubmitAcknowledgementResponseTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\SubmitAcknowledgementResponse;

/**
 * SubmitAcknowledgementResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the submitAcknowledgement operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\TransactionId();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\ErrorList();
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
