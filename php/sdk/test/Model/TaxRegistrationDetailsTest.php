<?php
/**
 * TaxRegistrationDetailsTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\TaxRegistrationDetails;

/**
 * TaxRegistrationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Tax registration details of the entity.
 * @package     SpApi
 */
class TaxRegistrationDetailsTest extends TestCase
{

    private TaxRegistrationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxRegistrationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxRegistrationDetails"
     */
    public function testTaxRegistrationDetails()
    {
        $this->assertInstanceOf(TaxRegistrationDetails::class, $this->model);
    }

    /**
     * Test attribute "tax_registration_type"
     */
    public function testPropertyTaxRegistrationType()
    {
        $enumInstance = new TaxRegistrationDetails();
        $allowedValues = $enumInstance->getTaxRegistrationTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setTaxRegistrationType($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationType());
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

    /**
     * Test attribute "tax_registration_address"
     */
    public function testPropertyTaxRegistrationAddress()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\Address();
        
        $this->model->setTaxRegistrationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationAddress());
    }

    /**
     * Test attribute "tax_registration_messages"
     */
    public function testPropertyTaxRegistrationMessages()
    {
        $testValue = 'test';
        
        $this->model->setTaxRegistrationMessages($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationMessages());
    }
}
