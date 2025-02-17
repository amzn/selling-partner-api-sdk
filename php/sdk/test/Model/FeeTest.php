<?php
/**
 * FeeTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\Fee;

/**
 * FeeTest Class Doc Comment
 *
 * @category    Class
 * @description Fee type and cost.
 * @package     SpApi
 */
class FeeTest extends TestCase
{

    private Fee $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Fee();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Fee"
     */
    public function testFee()
    {
        $this->assertInstanceOf(Fee::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $enumInstance = new Fee();
        $allowedValues = $enumInstance->getNameAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
