<?php
/**
 * GetSolicitationActionsForOrderResponseTest
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
use OpenAPI\Client\Model\solicitations\GetSolicitationActionsForOrderResponse;

/**
 * GetSolicitationActionsForOrderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getSolicitationActionsForOrder operation.
 * @package     OpenAPI\Client
 */
class GetSolicitationActionsForOrderResponseTest extends TestCase
{

    private GetSolicitationActionsForOrderResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSolicitationActionsForOrderResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSolicitationActionsForOrderResponse"
     */
    public function testGetSolicitationActionsForOrderResponse()
    {
        $this->assertInstanceOf(GetSolicitationActionsForOrderResponse::class, $this->model);
    }

    /**
     * Test attribute "_links"
     */
    public function testPropertyLinks()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\GetSolicitationActionsForOrderResponseLinks();
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }

    /**
     * Test attribute "_embedded"
     */
    public function testPropertyEmbedded()
    {
        
        $testValue = new \OpenAPI\Client\Model\solicitations\GetSolicitationActionsForOrderResponseEmbedded();
        
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
