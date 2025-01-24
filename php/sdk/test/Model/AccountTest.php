<?php
/**
 * AccountTest
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
use OpenAPI\Client\Model\sellers\Account;

/**
 * AccountTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getAccount&#x60; operation.
 * @package     OpenAPI\Client
 */
class AccountTest extends TestCase
{

    private Account $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Account();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Account"
     */
    public function testAccount()
    {
        $this->assertInstanceOf(Account::class, $this->model);
    }

    /**
     * Test attribute "marketplace_level_attributes"
     */
    public function testPropertyMarketplaceLevelAttributes()
    {
        $testValue = [];
        
        $this->model->setMarketplaceLevelAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceLevelAttributes());
    }

    /**
     * Test attribute "business_type"
     */
    public function testPropertyBusinessType()
    {
        $enumInstance = new Account();
        $allowedValues = $enumInstance->getBusinessTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setBusinessType($testValue);
        $this->assertEquals($testValue, $this->model->getBusinessType());
    }

    /**
     * Test attribute "business"
     */
    public function testPropertyBusiness()
    {
        
        $testValue = new \OpenAPI\Client\Model\sellers\Business();
        
        $this->model->setBusiness($testValue);
        $this->assertEquals($testValue, $this->model->getBusiness());
    }

    /**
     * Test attribute "primary_contact"
     */
    public function testPropertyPrimaryContact()
    {
        
        $testValue = new \OpenAPI\Client\Model\sellers\PrimaryContact();
        
        $this->model->setPrimaryContact($testValue);
        $this->assertEquals($testValue, $this->model->getPrimaryContact());
    }
}
