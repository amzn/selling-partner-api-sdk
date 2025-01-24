<?php
/**
 * RangeSlotCapacityErrorsTest
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
use OpenAPI\Client\Model\services\RangeSlotCapacityErrors;

/**
 * RangeSlotCapacityErrorsTest Class Doc Comment
 *
 * @category    Class
 * @description The error response schema for the &#x60;getRangeSlotCapacity&#x60; operation.
 * @package     OpenAPI\Client
 */
class RangeSlotCapacityErrorsTest extends TestCase
{

    private RangeSlotCapacityErrors $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RangeSlotCapacityErrors();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RangeSlotCapacityErrors"
     */
    public function testRangeSlotCapacityErrors()
    {
        $this->assertInstanceOf(RangeSlotCapacityErrors::class, $this->model);
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
