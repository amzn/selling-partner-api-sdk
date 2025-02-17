<?php
/**
 * ContactDetailsTest
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
use SpApi\Model\supplySources\v2020_07_01\ContactDetails;

/**
 * ContactDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The contact details
 * @package     SpApi
 */
class ContactDetailsTest extends TestCase
{

    private ContactDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContactDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContactDetails"
     */
    public function testContactDetails()
    {
        $this->assertInstanceOf(ContactDetails::class, $this->model);
    }

    /**
     * Test attribute "primary"
     */
    public function testPropertyPrimary()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\ContactDetailsPrimary();
        
        $this->model->setPrimary($testValue);
        $this->assertEquals($testValue, $this->model->getPrimary());
    }
}
