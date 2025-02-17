<?php
/**
 * GetAttributesResponseTest
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
use SpApi\Model\messaging\v1\GetAttributesResponse;

/**
 * GetAttributesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the GetAttributes operation.
 * @package     SpApi
 */
class GetAttributesResponseTest extends TestCase
{

    private GetAttributesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAttributesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAttributesResponse"
     */
    public function testGetAttributesResponse()
    {
        $this->assertInstanceOf(GetAttributesResponse::class, $this->model);
    }

    /**
     * Test attribute "buyer"
     */
    public function testPropertyBuyer()
    {
        
        $testValue = new \SpApi\Model\messaging\v1\GetAttributesResponseBuyer();
        
        $this->model->setBuyer($testValue);
        $this->assertEquals($testValue, $this->model->getBuyer());
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
