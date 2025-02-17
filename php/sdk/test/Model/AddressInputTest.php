<?php
/**
 * AddressInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\AddressInput;

/**
 * AddressInputTest Class Doc Comment
 *
 * @category    Class
 * @description Specific details to identify a place.
 * @package     SpApi
 */
class AddressInputTest extends TestCase
{

    private AddressInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddressInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddressInput"
     */
    public function testAddressInput()
    {
        $this->assertInstanceOf(AddressInput::class, $this->model);
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
     * Test attribute "company_name"
     */
    public function testPropertyCompanyName()
    {
        $testValue = 'test';
        
        $this->model->setCompanyName($testValue);
        $this->assertEquals($testValue, $this->model->getCompanyName());
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

    /**
     * Test attribute "email"
     */
    public function testPropertyEmail()
    {
        $testValue = 'test';
        
        $this->model->setEmail($testValue);
        $this->assertEquals($testValue, $this->model->getEmail());
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
     * Test attribute "phone_number"
     */
    public function testPropertyPhoneNumber()
    {
        $testValue = 'test';
        
        $this->model->setPhoneNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPhoneNumber());
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
     * Test attribute "state_or_province_code"
     */
    public function testPropertyStateOrProvinceCode()
    {
        $testValue = 'test';
        
        $this->model->setStateOrProvinceCode($testValue);
        $this->assertEquals($testValue, $this->model->getStateOrProvinceCode());
    }
}
