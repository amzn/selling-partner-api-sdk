<?php
/**
 * GetMessagingActionResponseTest
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
use OpenAPI\Client\Model\messaging\GetMessagingActionResponse;

/**
 * GetMessagingActionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Describes a messaging action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
 * @package     OpenAPI\Client
 */
class GetMessagingActionResponseTest extends TestCase
{

    private GetMessagingActionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMessagingActionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMessagingActionResponse"
     */
    public function testGetMessagingActionResponse()
    {
        $this->assertInstanceOf(GetMessagingActionResponse::class, $this->model);
    }

    /**
     * Test attribute "_links"
     */
    public function testPropertyLinks()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\GetMessagingActionResponseLinks();
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }

    /**
     * Test attribute "_embedded"
     */
    public function testPropertyEmbedded()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\GetMessagingActionResponseEmbedded();
        
        $this->model->setEmbedded($testValue);
        $this->assertEquals($testValue, $this->model->getEmbedded());
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\MessagingAction();
        
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
