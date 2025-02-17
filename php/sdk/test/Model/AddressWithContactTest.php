<?php
/**
 * AddressWithContactTest
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
use SpApi\Model\supplySources\v2020_07_01\AddressWithContact;

/**
 * AddressWithContactTest Class Doc Comment
 *
 * @category    Class
 * @description The address and contact details.
 * @package     SpApi
 */
class AddressWithContactTest extends TestCase
{

    private AddressWithContact $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddressWithContact();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddressWithContact"
     */
    public function testAddressWithContact()
    {
        $this->assertInstanceOf(AddressWithContact::class, $this->model);
    }

    /**
     * Test attribute "contact_details"
     */
    public function testPropertyContactDetails()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\ContactDetails();
        
        $this->model->setContactDetails($testValue);
        $this->assertEquals($testValue, $this->model->getContactDetails());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }
}
