<?php
/**
 * ChargeDetailsTest
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
use SpApi\Model\vendor\df\payments\v1\ChargeDetails;

/**
 * ChargeDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Monetary and tax details of the charge.
 * @package     SpApi
 */
class ChargeDetailsTest extends TestCase
{

    private ChargeDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ChargeDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ChargeDetails"
     */
    public function testChargeDetails()
    {
        $this->assertInstanceOf(ChargeDetails::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new ChargeDetails();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "charge_amount"
     */
    public function testPropertyChargeAmount()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\Money();
        
        $this->model->setChargeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getChargeAmount());
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
