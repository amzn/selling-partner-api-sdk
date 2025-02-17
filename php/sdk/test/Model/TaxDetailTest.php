<?php
/**
 * TaxDetailTest
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
use SpApi\Model\shipping\v2\TaxDetail;

/**
 * TaxDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the tax specifications associated with the shipment for customs compliance purposes in certain regions.
 * @package     SpApi
 */
class TaxDetailTest extends TestCase
{

    private TaxDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxDetail"
     */
    public function testTaxDetail()
    {
        $this->assertInstanceOf(TaxDetail::class, $this->model);
    }

    /**
     * Test attribute "tax_type"
     */
    public function testPropertyTaxType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\TaxType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTaxType($testValue);
        $this->assertEquals($testValue, $this->model->getTaxType());
    }

    /**
     * Test attribute "tax_registration_number"
     */
    public function testPropertyTaxRegistrationNumber()
    {
        $testValue = 'test';
        
        $this->model->setTaxRegistrationNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationNumber());
    }
}
