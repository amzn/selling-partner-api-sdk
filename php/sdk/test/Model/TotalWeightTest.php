<?php
/**
 * TotalWeightTest
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
use OpenAPI\Client\Model\vendor\shipments\TotalWeight;

/**
 * TotalWeightTest Class Doc Comment
 *
 * @category    Class
 * @description The total weight of units that are sold by weight in a shipment.
 * @package     OpenAPI\Client
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
