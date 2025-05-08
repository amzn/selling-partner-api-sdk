<?php
/**
 * AccountHolderAddressTest
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
use SpApi\Model\sellerWallet\v2024_03_01\AccountHolderAddress;

/**
 * AccountHolderAddressTest Class Doc Comment
 *
 * @category    Class
 * @description The Address used to verify the bank account of the payee. This can be a person or business mailing address.
 * @package     SpApi
 */
class AccountHolderAddressTest extends TestCase
{

    private AccountHolderAddress $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccountHolderAddress();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccountHolderAddress"
     */
    public function testAccountHolderAddress()
    {
        $this->assertInstanceOf(AccountHolderAddress::class, $this->model);
    }

    /**
     * Test attribute "address_line1"
     */
    public function testPropertyAddressLine1()
    {
        $testValue = 'test';
        
        $this->model->setAddressLine1($testValue);
        $this->assertEquals($testValue, $this->model->getAddressLine1());
    }

    /**
     * Test attribute "address_line2"
     */
    public function testPropertyAddressLine2()
    {
        $testValue = 'test';
        
        $this->model->setAddressLine2($testValue);
        $this->assertEquals($testValue, $this->model->getAddressLine2());
    }

    /**
     * Test attribute "city"
     */
    public function testPropertyCity()
    {
        $testValue = 'test';
        
        $this->model->setCity($testValue);
        $this->assertEquals($testValue, $this->model->getCity());
    }

    /**
     * Test attribute "state"
     */
    public function testPropertyState()
    {
        $testValue = 'test';
        
        $this->model->setState($testValue);
        $this->assertEquals($testValue, $this->model->getState());
    }

    /**
     * Test attribute "postal_code"
     */
    public function testPropertyPostalCode()
    {
        $testValue = 'test';
        
        $this->model->setPostalCode($testValue);
        $this->assertEquals($testValue, $this->model->getPostalCode());
    }

    /**
     * Test attribute "country"
     */
    public function testPropertyCountry()
    {
        $testValue = 'test';
        
        $this->model->setCountry($testValue);
        $this->assertEquals($testValue, $this->model->getCountry());
    }

    /**
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }
}
