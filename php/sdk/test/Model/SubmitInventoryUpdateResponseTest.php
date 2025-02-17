<?php
/**
 * SubmitInventoryUpdateResponseTest
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
use SpApi\Model\vendor\df\inventory\v1\SubmitInventoryUpdateResponse;

/**
 * SubmitInventoryUpdateResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the submitInventoryUpdate operation.
 * @package     SpApi
 */
class SubmitInventoryUpdateResponseTest extends TestCase
{

    private SubmitInventoryUpdateResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitInventoryUpdateResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitInventoryUpdateResponse"
     */
    public function testSubmitInventoryUpdateResponse()
    {
        $this->assertInstanceOf(SubmitInventoryUpdateResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\vendor\df\inventory\v1\TransactionReference();
        
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
