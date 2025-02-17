<?php
/**
 * ErrorListTest
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
use SpApi\Model\awd\v2024_05_09\ErrorList;

/**
 * ErrorListTest Class Doc Comment
 *
 * @category    Class
 * @description This exception is thrown when client inputs are invalid.
 * @package     SpApi
 */
class ErrorListTest extends TestCase
{

    private ErrorList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ErrorList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ErrorList"
     */
    public function testErrorList()
    {
        $this->assertInstanceOf(ErrorList::class, $this->model);
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
