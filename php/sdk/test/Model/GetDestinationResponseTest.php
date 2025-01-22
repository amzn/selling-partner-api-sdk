<?php
/**
 * GetDestinationResponseTest
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
use OpenAPI\Client\Model\notifications\GetDestinationResponse;

/**
 * GetDestinationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getDestination&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetDestinationResponseTest extends TestCase
{

    private GetDestinationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDestinationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDestinationResponse"
     */
    public function testGetDestinationResponse()
    {
        $this->assertInstanceOf(GetDestinationResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\notifications\Destination();
        
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
