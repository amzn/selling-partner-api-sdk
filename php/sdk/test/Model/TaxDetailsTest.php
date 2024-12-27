<?php
/**
 * TaxDetailsTest
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
use OpenAPI\Client\Model\fulfillmentinbound\TaxDetails;

/**
 * TaxDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Information used to determine the tax compliance.
 * @package     OpenAPI\Client
 */
class TaxDetailsTest extends TestCase
{

    private TaxDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxDetails"
     */
    public function testTaxDetails()
    {
        $this->assertInstanceOf(TaxDetails::class, $this->model);
    }

    /**
     * Test attribute "declared_value"
     */
    public function testPropertyDeclaredValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinbound\Currency();
        
        $this->model->setDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getDeclaredValue());
    }

    /**
     * Test attribute "hsn_code"
     */
    public function testPropertyHsnCode()
    {
        $testValue = 'test';
        
        $this->model->setHsnCode($testValue);
        $this->assertEquals($testValue, $this->model->getHsnCode());
    }

    /**
     * Test attribute "tax_rates"
     */
    public function testPropertyTaxRates()
    {
        $testValue = [];
        
        $this->model->setTaxRates($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRates());
    }
}
