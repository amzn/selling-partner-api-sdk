<?php
/**
 * ErrorTest
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
use SpApi\Model\awd\v2024_05_09\Error;

/**
 * ErrorTest Class Doc Comment
 *
 * @category    Class
 * @description Error response returned when the request is unsuccessful.
 * @package     SpApi
 */
class ErrorTest extends TestCase
{

    private Error $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Error();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Error"
     */
    public function testError()
    {
        $this->assertInstanceOf(Error::class, $this->model);
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
     * Test attribute "details"
     */
    public function testPropertyDetails()
    {
        $testValue = 'test';
        
        $this->model->setDetails($testValue);
        $this->assertEquals($testValue, $this->model->getDetails());
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
}
