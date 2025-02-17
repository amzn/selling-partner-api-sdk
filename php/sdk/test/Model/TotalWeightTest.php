<?php
/**
 * TotalWeightTest
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
use SpApi\Model\vendor\invoices\v1\TotalWeight;

/**
 * TotalWeightTest Class Doc Comment
 *
 * @category    Class
 * @description The aggregate weight of this item being invoiced. This information will be available for items sold by weight.
 * @package     SpApi
 */
class TotalWeightTest extends TestCase
{

    private TotalWeight $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TotalWeight();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TotalWeight"
     */
    public function testTotalWeight()
    {
        $this->assertInstanceOf(TotalWeight::class, $this->model);
    }

    /**
     * Test attribute "unit_of_measure"
     */
    public function testPropertyUnitOfMeasure()
    {
        $enumInstance = new TotalWeight();
        $allowedValues = $enumInstance->getUnitOfMeasureAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setUnitOfMeasure($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasure());
    }

    /**
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        $testValue = 'test';
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
