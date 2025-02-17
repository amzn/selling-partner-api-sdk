<?php
/**
 * BuyerTaxInformationTest
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
use SpApi\Model\orders\v0\BuyerTaxInformation;

/**
 * BuyerTaxInformationTest Class Doc Comment
 *
 * @category    Class
 * @description Contains the business invoice tax information. Available only in the TR marketplace.
 * @package     SpApi
 */
class BuyerTaxInformationTest extends TestCase
{

    private BuyerTaxInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BuyerTaxInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BuyerTaxInformation"
     */
    public function testBuyerTaxInformation()
    {
        $this->assertInstanceOf(BuyerTaxInformation::class, $this->model);
    }

    /**
     * Test attribute "buyer_legal_company_name"
     */
    public function testPropertyBuyerLegalCompanyName()
    {
        $testValue = 'test';
        
        $this->model->setBuyerLegalCompanyName($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerLegalCompanyName());
    }

    /**
     * Test attribute "buyer_business_address"
     */
    public function testPropertyBuyerBusinessAddress()
    {
        $testValue = 'test';
        
        $this->model->setBuyerBusinessAddress($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerBusinessAddress());
    }

    /**
     * Test attribute "buyer_tax_registration_id"
     */
    public function testPropertyBuyerTaxRegistrationId()
    {
        $testValue = 'test';
        
        $this->model->setBuyerTaxRegistrationId($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerTaxRegistrationId());
    }

    /**
     * Test attribute "buyer_tax_office"
     */
    public function testPropertyBuyerTaxOffice()
    {
        $testValue = 'test';
        
        $this->model->setBuyerTaxOffice($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerTaxOffice());
    }
}
