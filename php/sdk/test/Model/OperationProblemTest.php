<?php
/**
 * OperationProblemTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\OperationProblem;

/**
 * OperationProblemTest Class Doc Comment
 *
 * @category    Class
 * @description A problem with additional properties persisted to an operation.
 * @package     SpApi
 */
class OperationProblemTest extends TestCase
{

    private OperationProblem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OperationProblem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OperationProblem"
     */
    public function testOperationProblem()
    {
        $this->assertInstanceOf(OperationProblem::class, $this->model);
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

    /**
     * Test attribute "severity"
     */
    public function testPropertySeverity()
    {
        $testValue = 'test';
        
        $this->model->setSeverity($testValue);
        $this->assertEquals($testValue, $this->model->getSeverity());
    }
}
