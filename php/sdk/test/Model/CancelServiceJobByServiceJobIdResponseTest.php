<?php
/**
 * CancelServiceJobByServiceJobIdResponseTest
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
use OpenAPI\Client\Model\services\CancelServiceJobByServiceJobIdResponse;

/**
 * CancelServiceJobByServiceJobIdResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;cancelServiceJobByServiceJobId&#x60; operation.
 * @package     OpenAPI\Client
 */
class CancelServiceJobByServiceJobIdResponseTest extends TestCase
{

    private CancelServiceJobByServiceJobIdResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CancelServiceJobByServiceJobIdResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CancelServiceJobByServiceJobIdResponse"
     */
    public function testCancelServiceJobByServiceJobIdResponse()
    {
        $this->assertInstanceOf(CancelServiceJobByServiceJobIdResponse::class, $this->model);
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
