<?php
/**
 * FeesEstimateErrorTest
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
use OpenAPI\Client\Model\productfees\FeesEstimateError;

/**
 * FeesEstimateErrorTest Class Doc Comment
 *
 * @category    Class
 * @description An unexpected error occurred during this operation.
 * @package     OpenAPI\Client
 */
class FeesEstimateErrorTest extends TestCase
{

    private FeesEstimateError $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeesEstimateError();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeesEstimateError"
     */
    public function testFeesEstimateError()
    {
        $this->assertInstanceOf(FeesEstimateError::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $testValue = 'test';
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "code"
     */
    public function testPropertyCode()
    {
        $testValue = 'test';
        
        $this->model->setCode($testValue);
        $this->assertEquals($testValue, $this->model->getCode());
    }

    /**
     * Test attribute "message"
     */
    public function testPropertyMessage()
    {
        $testValue = 'test';
        
        $this->model->setMessage($testValue);
        $this->assertEquals($testValue, $this->model->getMessage());
    }

    /**
     * Test attribute "detail"
     */
    public function testPropertyDetail()
    {
        $testValue = [];
        
        $this->model->setDetail($testValue);
        $this->assertEquals($testValue, $this->model->getDetail());
    }
}
