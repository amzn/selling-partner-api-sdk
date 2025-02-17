<?php
/**
 * TaxWithholdingPeriodTest
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
use SpApi\Model\finances\v0\TaxWithholdingPeriod;

/**
 * TaxWithholdingPeriodTest Class Doc Comment
 *
 * @category    Class
 * @description Period which taxwithholding on seller&#39;s account is calculated.
 * @package     SpApi
 */
class TaxWithholdingPeriodTest extends TestCase
{

    private TaxWithholdingPeriod $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxWithholdingPeriod();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxWithholdingPeriod"
     */
    public function testTaxWithholdingPeriod()
    {
        $this->assertInstanceOf(TaxWithholdingPeriod::class, $this->model);
    }

    /**
     * Test attribute "start_date"
     */
    public function testPropertyStartDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getStartDate());
    }

    /**
     * Test attribute "end_date"
     */
    public function testPropertyEndDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndDate($testValue);
        $this->assertEquals($testValue, $this->model->getEndDate());
    }
}
