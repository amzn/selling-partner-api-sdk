<?php
/**
 * AddressExtendedFieldsTest
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
use SpApi\Model\orders\v0\AddressExtendedFields;

/**
 * AddressExtendedFieldsTest Class Doc Comment
 *
 * @category    Class
 * @description The container for address extended fields (such as &#x60;street name&#x60; and &#x60;street number&#x60;). Currently only available with Brazil shipping addresses.
 * @package     SpApi
 */
class AddressExtendedFieldsTest extends TestCase
{

    private AddressExtendedFields $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddressExtendedFields();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddressExtendedFields"
     */
    public function testAddressExtendedFields()
    {
        $this->assertInstanceOf(AddressExtendedFields::class, $this->model);
    }

    /**
     * Test attribute "street_name"
     */
    public function testPropertyStreetName()
    {
        $testValue = 'test';
        
        $this->model->setStreetName($testValue);
        $this->assertEquals($testValue, $this->model->getStreetName());
    }

    /**
     * Test attribute "street_number"
     */
    public function testPropertyStreetNumber()
    {
        $testValue = 'test';
        
        $this->model->setStreetNumber($testValue);
        $this->assertEquals($testValue, $this->model->getStreetNumber());
    }

    /**
     * Test attribute "complement"
     */
    public function testPropertyComplement()
    {
        $testValue = 'test';
        
        $this->model->setComplement($testValue);
        $this->assertEquals($testValue, $this->model->getComplement());
    }

    /**
     * Test attribute "neighborhood"
     */
    public function testPropertyNeighborhood()
    {
        $testValue = 'test';
        
        $this->model->setNeighborhood($testValue);
        $this->assertEquals($testValue, $this->model->getNeighborhood());
    }
}
