<?php
/**
 * PatchOperationTest
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
use OpenAPI\Client\Model\listings\items\PatchOperation;

/**
 * PatchOperationTest Class Doc Comment
 *
 * @category    Class
 * @description Individual JSON Patch operation for an HTTP PATCH request.
 * @package     OpenAPI\Client
 */
class PatchOperationTest extends TestCase
{

    private PatchOperation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PatchOperation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PatchOperation"
     */
    public function testPatchOperation()
    {
        $this->assertInstanceOf(PatchOperation::class, $this->model);
    }

    /**
     * Test attribute "op"
     */
    public function testPropertyOp()
    {
        $enumInstance = new PatchOperation();
        $allowedValues = $enumInstance->getOpAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setOp($testValue);
        $this->assertEquals($testValue, $this->model->getOp());
    }

    /**
     * Test attribute "path"
     */
    public function testPropertyPath()
    {
        $testValue = 'test';
        
        $this->model->setPath($testValue);
        $this->assertEquals($testValue, $this->model->getPath());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = [];
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
