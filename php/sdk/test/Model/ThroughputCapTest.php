<?php
/**
 * ThroughputCapTest
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
use SpApi\Model\supplySources\v2020_07_01\ThroughputCap;

/**
 * ThroughputCapTest Class Doc Comment
 *
 * @category    Class
 * @description The throughput capacity
 * @package     SpApi
 */
class ThroughputCapTest extends TestCase
{

    private ThroughputCap $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ThroughputCap();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ThroughputCap"
     */
    public function testThroughputCap()
    {
        $this->assertInstanceOf(ThroughputCap::class, $this->model);
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 123;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }

    /**
     * Test attribute "time_unit"
     */
    public function testPropertyTimeUnit()
    {
        $enumInstance = new \SpApi\Model\supplySources\v2020_07_01\TimeUnit();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTimeUnit($testValue);
        $this->assertEquals($testValue, $this->model->getTimeUnit());
    }
}
