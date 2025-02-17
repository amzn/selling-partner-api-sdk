<?php
/**
 * ContactDetailsPrimaryTest
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
use SpApi\Model\supplySources\v2020_07_01\ContactDetailsPrimary;

/**
 * ContactDetailsPrimaryTest Class Doc Comment
 *
 * @category    Class
 * @description ContactDetailsPrimary
 * @package     SpApi
 */
class ContactDetailsPrimaryTest extends TestCase
{

    private ContactDetailsPrimary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContactDetailsPrimary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContactDetailsPrimary"
     */
    public function testContactDetailsPrimary()
    {
        $this->assertInstanceOf(ContactDetailsPrimary::class, $this->model);
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
     * Test attribute "phone"
     */
    public function testPropertyPhone()
    {
        $testValue = 'test';
        
        $this->model->setPhone($testValue);
        $this->assertEquals($testValue, $this->model->getPhone());
    }
}
