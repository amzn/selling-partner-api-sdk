<?php
/**
 * GetAccountResponseTest
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
use SpApi\Model\sellers\v1\GetAccountResponse;

/**
 * GetAccountResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getAccount&#x60; operation.
 * @package     SpApi
 */
class GetAccountResponseTest extends TestCase
{

    private GetAccountResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAccountResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAccountResponse"
     */
    public function testGetAccountResponse()
    {
        $this->assertInstanceOf(GetAccountResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\Account();
        
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
