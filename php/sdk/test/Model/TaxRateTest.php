<?php
/**
 * TaxRateTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinbound\TaxRate;

/**
 * TaxRateTest Class Doc Comment
 *
 * @category    Class
 * @description Contains the type and rate of tax.
 * @package     OpenAPI\Client
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
