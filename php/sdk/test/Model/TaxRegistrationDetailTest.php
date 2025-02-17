<?php
/**
 * TaxRegistrationDetailTest
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
use SpApi\Model\vendor\df\payments\v1\TaxRegistrationDetail;

/**
 * TaxRegistrationDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Tax registration details of the entity.
 * @package     SpApi
 */
class TaxRegistrationDetailTest extends TestCase
{

    private TaxRegistrationDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxRegistrationDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxRegistrationDetail"
     */
    public function testTaxRegistrationDetail()
    {
        $this->assertInstanceOf(TaxRegistrationDetail::class, $this->model);
    }

    /**
     * Test attribute "tax_registration_type"
     */
    public function testPropertyTaxRegistrationType()
    {
        $enumInstance = new TaxRegistrationDetail();
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
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\Address();
        
        $this->model->setTaxRegistrationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationAddress());
    }

    /**
     * Test attribute "tax_registration_message"
     */
    public function testPropertyTaxRegistrationMessage()
    {
        $testValue = 'test';
        
        $this->model->setTaxRegistrationMessage($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationMessage());
    }
}
