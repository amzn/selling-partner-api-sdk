<?php
/**
 * GetAdditionalSellerInputsResponseTest
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
use OpenAPI\Client\Model\merchantfulfillment\GetAdditionalSellerInputsResponse;

/**
 * GetAdditionalSellerInputsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     OpenAPI\Client
 */
class GetAdditionalSellerInputsResponseTest extends TestCase
{

    private GetAdditionalSellerInputsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAdditionalSellerInputsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAdditionalSellerInputsResponse"
     */
    public function testGetAdditionalSellerInputsResponse()
    {
        $this->assertInstanceOf(GetAdditionalSellerInputsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\GetAdditionalSellerInputsResult();
        
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
