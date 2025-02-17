<?php
/**
 * CreateDigitalAccessKeyResponseTest
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
use SpApi\Model\messaging\v1\CreateDigitalAccessKeyResponse;

/**
 * CreateDigitalAccessKeyResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;createDigitalAccessKey&#x60; operation.
 * @package     SpApi
 */
class CreateDigitalAccessKeyResponseTest extends TestCase
{

    private CreateDigitalAccessKeyResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateDigitalAccessKeyResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateDigitalAccessKeyResponse"
     */
    public function testCreateDigitalAccessKeyResponse()
    {
        $this->assertInstanceOf(CreateDigitalAccessKeyResponse::class, $this->model);
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
