<?php
/**
 * CompleteServiceJobByServiceJobIdResponseTest
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
use OpenAPI\Client\Model\services\v1\CompleteServiceJobByServiceJobIdResponse;

/**
 * CompleteServiceJobByServiceJobIdResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;completeServiceJobByServiceJobId&#x60; operation.
 * @package     OpenAPI\Client
 */
class CompleteServiceJobByServiceJobIdResponseTest extends TestCase
{

    private CompleteServiceJobByServiceJobIdResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompleteServiceJobByServiceJobIdResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompleteServiceJobByServiceJobIdResponse"
     */
    public function testCompleteServiceJobByServiceJobIdResponse()
    {
        $this->assertInstanceOf(CompleteServiceJobByServiceJobIdResponse::class, $this->model);
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
