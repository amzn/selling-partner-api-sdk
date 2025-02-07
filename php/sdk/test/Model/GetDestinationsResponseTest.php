<?php
/**
 * GetDestinationsResponseTest
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
use OpenAPI\Client\Model\notifications\v1\GetDestinationsResponse;

/**
 * GetDestinationsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getDestinations&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetDestinationsResponseTest extends TestCase
{

    private GetDestinationsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDestinationsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDestinationsResponse"
     */
    public function testGetDestinationsResponse()
    {
        $this->assertInstanceOf(GetDestinationsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = [];
        
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
