<?php
/**
 * FixedSlotCapacityErrorsTest
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
use SpApi\Model\services\v1\FixedSlotCapacityErrors;

/**
 * FixedSlotCapacityErrorsTest Class Doc Comment
 *
 * @category    Class
 * @description The error response schema for the &#x60;getFixedSlotCapacity&#x60; operation.
 * @package     SpApi
 */
class FixedSlotCapacityErrorsTest extends TestCase
{

    private FixedSlotCapacityErrors $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FixedSlotCapacityErrors();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FixedSlotCapacityErrors"
     */
    public function testFixedSlotCapacityErrors()
    {
        $this->assertInstanceOf(FixedSlotCapacityErrors::class, $this->model);
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
