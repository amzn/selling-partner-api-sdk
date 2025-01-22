<?php
/**
 * ContactTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\inbound\v0\Contact;

/**
 * ContactTest Class Doc Comment
 *
 * @category    Class
 * @description Contact information for the person in the seller&#39;s organization who is responsible for a Less Than Truckload/Full Truckload (LTL/FTL) shipment.
 * @package     OpenAPI\Client
 */
class ContactTest extends TestCase
{

    private Contact $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Contact();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Contact"
     */
    public function testContact()
    {
        $this->assertInstanceOf(Contact::class, $this->model);
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
     * Test attribute "phone"
     */
    public function testPropertyPhone()
    {
        $testValue = 'test';
        
        $this->model->setPhone($testValue);
        $this->assertEquals($testValue, $this->model->getPhone());
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
     * Test attribute "fax"
     */
    public function testPropertyFax()
    {
        $testValue = 'test';
        
        $this->model->setFax($testValue);
        $this->assertEquals($testValue, $this->model->getFax());
    }
}
