<?php
/**
 * VariablePrecisionAddressTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\VariablePrecisionAddress;

/**
 * VariablePrecisionAddressTest Class Doc Comment
 *
 * @category    Class
 * @description A physical address with varying degrees of precision. A more precise address can provide more accurate results than country code and postal code alone.
 * @package     SpApi
 */
class VariablePrecisionAddressTest extends TestCase
{

    private VariablePrecisionAddress $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VariablePrecisionAddress();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VariablePrecisionAddress"
     */
    public function testVariablePrecisionAddress()
    {
        $this->assertInstanceOf(VariablePrecisionAddress::class, $this->model);
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
     * Test attribute "district_or_county"
     */
    public function testPropertyDistrictOrCounty()
    {
        $testValue = 'test';
        
        $this->model->setDistrictOrCounty($testValue);
        $this->assertEquals($testValue, $this->model->getDistrictOrCounty());
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
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }
}
