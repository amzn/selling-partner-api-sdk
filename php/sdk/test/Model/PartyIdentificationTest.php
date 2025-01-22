<?php
/**
 * PartyIdentificationTest
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
use OpenAPI\Client\Model\vendor\df\payments\PartyIdentification;

/**
 * PartyIdentificationTest Class Doc Comment
 *
 * @category    Class
 * @description Name, address and tax details of a party.
 * @package     OpenAPI\Client
 */
class PartyIdentificationTest extends TestCase
{

    private PartyIdentification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartyIdentification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartyIdentification"
     */
    public function testPartyIdentification()
    {
        $this->assertInstanceOf(PartyIdentification::class, $this->model);
    }

    /**
     * Test attribute "party_id"
     */
    public function testPropertyPartyId()
    {
        $testValue = 'test';
        
        $this->model->setPartyId($testValue);
        $this->assertEquals($testValue, $this->model->getPartyId());
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\payments\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "tax_registration_details"
     */
    public function testPropertyTaxRegistrationDetails()
    {
        $testValue = [];
        
        $this->model->setTaxRegistrationDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTaxRegistrationDetails());
    }
}
