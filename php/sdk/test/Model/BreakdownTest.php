<?php
/**
 * BreakdownTest
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
use SpApi\Model\finances\v2024_06_19\Breakdown;

/**
 * BreakdownTest Class Doc Comment
 *
 * @category    Class
 * @description Breakdown provides details regarding the money movement under the financial transaction. Breakdowns get categorized further into breakdown types, breakdown amounts, and further breakdowns into a hierarchical structure.
 * @package     SpApi
 */
class BreakdownTest extends TestCase
{

    private Breakdown $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Breakdown();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Breakdown"
     */
    public function testBreakdown()
    {
        $this->assertInstanceOf(Breakdown::class, $this->model);
    }

    /**
     * Test attribute "breakdown_type"
     */
    public function testPropertyBreakdownType()
    {
        $testValue = 'test';
        
        $this->model->setBreakdownType($testValue);
        $this->assertEquals($testValue, $this->model->getBreakdownType());
    }

    /**
     * Test attribute "breakdown_amount"
     */
    public function testPropertyBreakdownAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v2024_06_19\Currency();
        
        $this->model->setBreakdownAmount($testValue);
        $this->assertEquals($testValue, $this->model->getBreakdownAmount());
    }

    /**
     * Test attribute "breakdowns"
     */
    public function testPropertyBreakdowns()
    {
        
        $testValue = new \SpApi\Model\finances\v2024_06_19\Breakdown();
        
        $this->model->setBreakdowns($testValue);
        $this->assertEquals($testValue, $this->model->getBreakdowns());
    }
}
