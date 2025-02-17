<?php
/**
 * AddressTest
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
use SpApi\Model\awd\v2024_05_09\Address;

/**
 * AddressTest Class Doc Comment
 *
 * @category    Class
 * @description Shipping address that represents the origin or destination location.
 * @package     SpApi
 */
class AddressTest extends TestCase
{

    private Address $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Address();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Address"
     */
    public function testAddress()
    {
        $this->assertInstanceOf(Address::class, $this->model);
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
     * Test attribute "address_line3"
     */
    public function testPropertyAddressLine3()
    {
        $testValue = 'test';
        
        $this->model->setAddressLine3($testValue);
        $this->assertEquals($testValue, $this->model->getAddressLine3());
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
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }

    /**
     * Test attribute "county"
     */
    public function testPropertyCounty()
    {
        $testValue = 'test';
        
        $this->model->setCounty($testValue);
        $this->assertEquals($testValue, $this->model->getCounty());
    }

    /**
     * Test attribute "district"
     */
    public function testPropertyDistrict()
    {
        $testValue = 'test';
        
        $this->model->setDistrict($testValue);
        $this->assertEquals($testValue, $this->model->getDistrict());
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
     * Test attribute "state_or_region"
     */
    public function testPropertyStateOrRegion()
    {
        $testValue = 'test';
        
        $this->model->setStateOrRegion($testValue);
        $this->assertEquals($testValue, $this->model->getStateOrRegion());
    }
}
