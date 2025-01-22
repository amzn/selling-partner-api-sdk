<?php
/**
 * FixedSlotCapacityErrorsTest
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
use OpenAPI\Client\Model\services\FixedSlotCapacityErrors;

/**
 * FixedSlotCapacityErrorsTest Class Doc Comment
 *
 * @category    Class
 * @description The error response schema for the &#x60;getFixedSlotCapacity&#x60; operation.
 * @package     OpenAPI\Client
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
