<?php
/**
 * TaxRateTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\TaxRate;

/**
 * TaxRateTest Class Doc Comment
 *
 * @category    Class
 * @description Contains the type and rate of tax.
 * @package     SpApi
 */
class TaxRateTest extends TestCase
{

    private TaxRate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxRate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxRate"
     */
    public function testTaxRate()
    {
        $this->assertInstanceOf(TaxRate::class, $this->model);
    }

    /**
     * Test attribute "cess_rate"
     */
    public function testPropertyCessRate()
    {
        $testValue = 1;
        
        $this->model->setCessRate($testValue);
        $this->assertEquals($testValue, $this->model->getCessRate());
    }

    /**
     * Test attribute "gst_rate"
     */
    public function testPropertyGstRate()
    {
        $testValue = 1;
        
        $this->model->setGstRate($testValue);
        $this->assertEquals($testValue, $this->model->getGstRate());
    }

    /**
     * Test attribute "tax_type"
     */
    public function testPropertyTaxType()
    {
        $testValue = 'test';
        
        $this->model->setTaxType($testValue);
        $this->assertEquals($testValue, $this->model->getTaxType());
    }
}
