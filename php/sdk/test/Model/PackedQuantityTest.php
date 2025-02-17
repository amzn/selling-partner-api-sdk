<?php
/**
 * PackedQuantityTest
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
use SpApi\Model\vendor\shipments\v1\PackedQuantity;

/**
 * PackedQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Details of item quantity.
 * @package     SpApi
 */
class PackedQuantityTest extends TestCase
{

    private PackedQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackedQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackedQuantity"
     */
    public function testPackedQuantity()
    {
        $this->assertInstanceOf(PackedQuantity::class, $this->model);
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        $testValue = 123;
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }

    /**
     * Test attribute "unit_of_measure"
     */
    public function testPropertyUnitOfMeasure()
    {
        $enumInstance = new PackedQuantity();
        $allowedValues = $enumInstance->getUnitOfMeasureAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setUnitOfMeasure($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasure());
    }

    /**
     * Test attribute "unit_size"
     */
    public function testPropertyUnitSize()
    {
        $testValue = 123;
        
        $this->model->setUnitSize($testValue);
        $this->assertEquals($testValue, $this->model->getUnitSize());
    }
}
