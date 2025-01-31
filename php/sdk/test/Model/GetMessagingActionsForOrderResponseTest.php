<?php
/**
 * GetMessagingActionsForOrderResponseTest
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
use OpenAPI\Client\Model\messaging\GetMessagingActionsForOrderResponse;

/**
 * GetMessagingActionsForOrderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getMessagingActionsForOrder&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetMessagingActionsForOrderResponseTest extends TestCase
{

    private GetMessagingActionsForOrderResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMessagingActionsForOrderResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMessagingActionsForOrderResponse"
     */
    public function testGetMessagingActionsForOrderResponse()
    {
        $this->assertInstanceOf(GetMessagingActionsForOrderResponse::class, $this->model);
    }

    /**
     * Test attribute "_links"
     */
    public function testPropertyLinks()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\GetMessagingActionsForOrderResponseLinks();
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }

    /**
     * Test attribute "_embedded"
     */
    public function testPropertyEmbedded()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\GetMessagingActionsForOrderResponseEmbedded();
        
        $this->model->setEmbedded($testValue);
        $this->assertEquals($testValue, $this->model->getEmbedded());
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
