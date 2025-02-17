<?php
/**
 * LinkCarrierAccountRequestTest
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
use SpApi\Model\shipping\v2\LinkCarrierAccountRequest;

/**
 * LinkCarrierAccountRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for verify and add the merchant&#39;s account with a certain carrier.
 * @package     SpApi
 */
class LinkCarrierAccountRequestTest extends TestCase
{

    private LinkCarrierAccountRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LinkCarrierAccountRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LinkCarrierAccountRequest"
     */
    public function testLinkCarrierAccountRequest()
    {
        $this->assertInstanceOf(LinkCarrierAccountRequest::class, $this->model);
    }

    /**
     * Test attribute "client_reference_details"
     */
    public function testPropertyClientReferenceDetails()
    {
        $testValue = [];
        
        $this->model->setClientReferenceDetails($testValue);
        $this->assertEquals($testValue, $this->model->getClientReferenceDetails());
    }

    /**
     * Test attribute "carrier_account_type"
     */
    public function testPropertyCarrierAccountType()
    {
        $testValue = 'test';
        
        $this->model->setCarrierAccountType($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierAccountType());
    }

    /**
     * Test attribute "carrier_account_attributes"
     */
    public function testPropertyCarrierAccountAttributes()
    {
        $testValue = [];
        
        $this->model->setCarrierAccountAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierAccountAttributes());
    }

    /**
     * Test attribute "encrypted_carrier_account_attributes"
     */
    public function testPropertyEncryptedCarrierAccountAttributes()
    {
        $testValue = [];
        
        $this->model->setEncryptedCarrierAccountAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getEncryptedCarrierAccountAttributes());
    }
}
