<?php
/**
 * AllowanceDetailsTest
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
use SpApi\Model\vendor\invoices\v1\AllowanceDetails;

/**
 * AllowanceDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Monetary and tax details of the allowance.
 * @package     SpApi
 */
class AllowanceDetailsTest extends TestCase
{

    private AllowanceDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AllowanceDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AllowanceDetails"
     */
    public function testAllowanceDetails()
    {
        $this->assertInstanceOf(AllowanceDetails::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new AllowanceDetails();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "allowance_amount"
     */
    public function testPropertyAllowanceAmount()
    {
        
        $testValue = new \SpApi\Model\vendor\invoices\v1\Money();
        
        $this->model->setAllowanceAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAllowanceAmount());
    }

    /**
     * Test attribute "tax_details"
     */
    public function testPropertyTaxDetails()
    {
        $testValue = [];
        
        $this->model->setTaxDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTaxDetails());
    }
}
