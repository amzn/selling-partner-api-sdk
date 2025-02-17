<?php
/**
 * PrimaryContactTest
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
use SpApi\Model\sellers\v1\PrimaryContact;

/**
 * PrimaryContactTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the seller&#39;s primary contact.
 * @package     SpApi
 */
class PrimaryContactTest extends TestCase
{

    private PrimaryContact $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrimaryContact();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrimaryContact"
     */
    public function testPrimaryContact()
    {
        $this->assertInstanceOf(PrimaryContact::class, $this->model);
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
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "non_latin_name"
     */
    public function testPropertyNonLatinName()
    {
        $testValue = 'test';
        
        $this->model->setNonLatinName($testValue);
        $this->assertEquals($testValue, $this->model->getNonLatinName());
    }
}
