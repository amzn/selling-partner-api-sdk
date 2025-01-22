<?php
/**
 * ThroughputConfigTest
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
use OpenAPI\Client\Model\supplySources\ThroughputConfig;

/**
 * ThroughputConfigTest Class Doc Comment
 *
 * @category    Class
 * @description The throughput configuration.
 * @package     OpenAPI\Client
 */
class ThroughputConfigTest extends TestCase
{

    private ThroughputConfig $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ThroughputConfig();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ThroughputConfig"
     */
    public function testThroughputConfig()
    {
        $this->assertInstanceOf(ThroughputConfig::class, $this->model);
    }

    /**
     * Test attribute "throughput_cap"
     */
    public function testPropertyThroughputCap()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\ThroughputCap();
        
        $this->model->setThroughputCap($testValue);
        $this->assertEquals($testValue, $this->model->getThroughputCap());
    }

    /**
     * Test attribute "throughput_unit"
     */
    public function testPropertyThroughputUnit()
    {
        $enumInstance = new \OpenAPI\Client\Model\supplySources\ThroughputUnit();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setThroughputUnit($testValue);
        $this->assertEquals($testValue, $this->model->getThroughputUnit());
    }
}
