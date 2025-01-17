<?php
/**
 * TaxRegistrationDetailsTest
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
use OpenAPI\Client\Model\vendor\df\orders\TaxRegistrationDetails;

/**
 * TaxRegistrationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Tax registration details of the entity.
 * @package     OpenAPI\Client
 */
class TaxRegistrationDetailsTest extends TestCase
{

    private TaxRegistrationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxRegistrationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxRegistrationDetails"
     */
    public function testTaxRegistrationDetails()
    {
        $this->assertInstanceOf(TaxRegistrationDetails::class, $this->model);
    }

    /**
     * Test attribute "tax_registration_type"
     */
    public function testPropertyTaxRegistrationType()
    {
        $enumInstance = new TaxRegistrationDetails();
        $allowedValues = $enumInstance->getTaxRegistrationTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setTaxRegistrationType($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationType());
    }

    /**
     * Test attribute "tax_registration_number"
     */
    public function testPropertyTaxRegistrationNumber()
    {
        $testValue = 'test';
        
        $this->model->setTaxRegistrationNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationNumber());
    }

    /**
     * Test attribute "tax_registration_address"
     */
    public function testPropertyTaxRegistrationAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\orders\Address();
        
        $this->model->setTaxRegistrationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationAddress());
    }

    /**
     * Test attribute "tax_registration_messages"
     */
    public function testPropertyTaxRegistrationMessages()
    {
        $testValue = 'test';
        
        $this->model->setTaxRegistrationMessages($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationMessages());
    }
}
