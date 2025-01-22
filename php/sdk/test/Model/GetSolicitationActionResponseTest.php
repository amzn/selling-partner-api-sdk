<?php
/**
 * GetSolicitationActionResponseTest
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
use OpenAPI\Client\Model\solicitations\GetSolicitationActionResponse;

/**
 * GetSolicitationActionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
 * @package     OpenAPI\Client
 */
class GetSolicitationActionResponseTest extends TestCase
{

    private GetSolicitationActionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSolicitationActionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSolicitationActionResponse"
     */
    public function testGetSolicitationActionResponse()
    {
        $this->assertInstanceOf(GetSolicitationActionResponse::class, $this->model);
    }

    /**
     * Test attribute "_links"
     */
    public function testPropertyLinks()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\GetSolicitationActionResponseLinks();
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }

    /**
     * Test attribute "_embedded"
     */
    public function testPropertyEmbedded()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\GetSolicitationActionResponseEmbedded();
        
        $this->model->setEmbedded($testValue);
        $this->assertEquals($testValue, $this->model->getEmbedded());
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\SolicitationsAction();
        
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
