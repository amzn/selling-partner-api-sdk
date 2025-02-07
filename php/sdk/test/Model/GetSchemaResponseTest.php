<?php
/**
 * GetSchemaResponseTest
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
use OpenAPI\Client\Model\messaging\v1\GetSchemaResponse;

/**
 * GetSchemaResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;GET&#x60; request schema response.
 * @package     OpenAPI\Client
 */
class GetSchemaResponseTest extends TestCase
{

    private GetSchemaResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSchemaResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSchemaResponse"
     */
    public function testGetSchemaResponse()
    {
        $this->assertInstanceOf(GetSchemaResponse::class, $this->model);
    }

    /**
     * Test attribute "_links"
     */
    public function testPropertyLinks()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\v1\GetSchemaResponseLinks();
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = array();
        
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
