<?php
/**
 * UpdateVerificationStatusErrorResponseTest
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
use OpenAPI\Client\Model\orders\v0\UpdateVerificationStatusErrorResponse;

/**
 * UpdateVerificationStatusErrorResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The error response schema for the &#x60;UpdateVerificationStatus&#x60; operation.
 * @package     OpenAPI\Client
 */
class UpdateVerificationStatusErrorResponseTest extends TestCase
{

    private UpdateVerificationStatusErrorResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateVerificationStatusErrorResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateVerificationStatusErrorResponse"
     */
    public function testUpdateVerificationStatusErrorResponse()
    {
        $this->assertInstanceOf(UpdateVerificationStatusErrorResponse::class, $this->model);
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
