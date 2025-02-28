<?php
/**
 * BusinessTest
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
use SpApi\Model\sellers\v1\Business;

/**
 * BusinessTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the seller&#39;s business. Certain fields may be omitted depending on the seller&#39;s &#x60;businessType&#x60;.
 * @package     SpApi
 */
class BusinessTest extends TestCase
{

    private Business $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Business();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Business"
     */
    public function testBusiness()
    {
        $this->assertInstanceOf(Business::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "registered_business_address"
     */
    public function testPropertyRegisteredBusinessAddress()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\Address();
        
        $this->model->setRegisteredBusinessAddress($testValue);
        $this->assertEquals($testValue, $this->model->getRegisteredBusinessAddress());
    }

    /**
     * Test attribute "company_registration_number"
     */
    public function testPropertyCompanyRegistrationNumber()
    {
        $testValue = 'test';
        
        $this->model->setCompanyRegistrationNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCompanyRegistrationNumber());
    }

    /**
     * Test attribute "company_tax_identification_number"
     */
    public function testPropertyCompanyTaxIdentificationNumber()
    {
        $testValue = 'test';
        
        $this->model->setCompanyTaxIdentificationNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCompanyTaxIdentificationNumber());
    }

    /**
     * Test attribute "non_latin_name"
     */
    public function testPropertyNonLatinName()
    {
        $testValue = 'test';
        
        $this->model->setNonLatinName($testValue);
        $this->assertEquals($testValue, $this->model->getNonLatinName());
    }
}
