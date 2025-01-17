<?php
/**
 * ContactInformationTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation;

/**
 * ContactInformationTest Class Doc Comment
 *
 * @category    Class
 * @description The seller&#39;s contact information.
 * @package     OpenAPI\Client
 */
class ContactInformationTest extends TestCase
{

    private ContactInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContactInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContactInformation"
     */
    public function testContactInformation()
    {
        $this->assertInstanceOf(ContactInformation::class, $this->model);
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
}
