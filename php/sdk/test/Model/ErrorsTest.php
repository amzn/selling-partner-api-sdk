<?php
/**
 * ErrorsTest
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
use OpenAPI\Client\Model\pricing\v0\Errors;

/**
 * ErrorsTest Class Doc Comment
 *
 * @category    Class
 * @description A list of error responses returned when a request is unsuccessful.
 * @package     OpenAPI\Client
 */
class ErrorsTest extends TestCase
{

    private Errors $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Errors();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Errors"
     */
    public function testErrors()
    {
        $this->assertInstanceOf(Errors::class, $this->model);
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
