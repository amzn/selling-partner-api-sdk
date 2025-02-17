<?php
/**
 * GetSolicitationActionsForOrderResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\solicitations\v1\GetSolicitationActionsForOrderResponse;

/**
 * GetSolicitationActionsForOrderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getSolicitationActionsForOrder operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\solicitations\v1\GetSolicitationActionsForOrderResponseLinks();
        
        $this->model->setLinks($testValue);
        $this->assertEquals($testValue, $this->model->getLinks());
    }

    /**
     * Test attribute "_embedded"
     */
    public function testPropertyEmbedded()
    {
        
        $testValue = new \SpApi\Model\solicitations\v1\GetSolicitationActionsForOrderResponseEmbedded();
        
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
