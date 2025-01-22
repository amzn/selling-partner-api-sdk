<?php
/**
 * WeightTest
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
use OpenAPI\Client\Model\easyship\Weight;

/**
 * WeightTest Class Doc Comment
 *
 * @category    Class
 * @description The weight of the scheduled package
 * @package     OpenAPI\Client
 */
class WeightTest extends TestCase
{

    private Weight $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Weight();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Weight"
     */
    public function testWeight()
    {
        $this->assertInstanceOf(Weight::class, $this->model);
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        
        $testValue = new float();
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new \OpenAPI\Client\Model\easyship\UnitOfWeight();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }
}
