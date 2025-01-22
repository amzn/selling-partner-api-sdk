<?php
/**
 * WarningTest
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
use OpenAPI\Client\Model\services\Warning;

/**
 * WarningTest Class Doc Comment
 *
 * @category    Class
 * @description Warning returned when the request is successful, but there are important callouts based on which API clients should take defined actions.
 * @package     OpenAPI\Client
 */
class WarningTest extends TestCase
{

    private Warning $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Warning();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Warning"
     */
    public function testWarning()
    {
        $this->assertInstanceOf(Warning::class, $this->model);
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
     * Test attribute "details"
     */
    public function testPropertyDetails()
    {
        $testValue = 'test';
        
        $this->model->setDetails($testValue);
        $this->assertEquals($testValue, $this->model->getDetails());
    }
}
