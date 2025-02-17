<?php
/**
 * InboundOperationStatusTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\InboundOperationStatus;

/**
 * InboundOperationStatusTest Class Doc Comment
 *
 * @category    Class
 * @description GetInboundOperationStatus response.
 * @package     SpApi
 */
class InboundOperationStatusTest extends TestCase
{

    private InboundOperationStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundOperationStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundOperationStatus"
     */
    public function testInboundOperationStatus()
    {
        $this->assertInstanceOf(InboundOperationStatus::class, $this->model);
    }

    /**
     * Test attribute "operation"
     */
    public function testPropertyOperation()
    {
        $testValue = 'test';
        
        $this->model->setOperation($testValue);
        $this->assertEquals($testValue, $this->model->getOperation());
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }

    /**
     * Test attribute "operation_problems"
     */
    public function testPropertyOperationProblems()
    {
        $testValue = [];
        
        $this->model->setOperationProblems($testValue);
        $this->assertEquals($testValue, $this->model->getOperationProblems());
    }

    /**
     * Test attribute "operation_status"
     */
    public function testPropertyOperationStatus()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\OperationStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOperationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getOperationStatus());
    }
}
