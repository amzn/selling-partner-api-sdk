<?php
/**
 * AddressTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\sellers\Address;

/**
 * AddressTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an address
 * @package     OpenAPI\Client
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
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
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
     * Test attribute "postal_code"
     */
    public function testPropertyPostalCode()
    {
        $testValue = 'test';
        
        $this->model->setPostalCode($testValue);
        $this->assertEquals($testValue, $this->model->getPostalCode());
    }
}
