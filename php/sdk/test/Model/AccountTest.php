<?php
/**
 * AccountTest
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
use SpApi\Model\sellers\v1\Account;

/**
 * AccountTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getAccount&#x60; operation.
 * @package     SpApi
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
     * Test attribute "marketplace_participation_list"
     */
    public function testPropertyMarketplaceParticipationList()
    {
        $testValue = [];
        
        $this->model->setMarketplaceParticipationList($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceParticipationList());
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
     * Test attribute "selling_plan"
     */
    public function testPropertySellingPlan()
    {
        $enumInstance = new Account();
        $allowedValues = $enumInstance->getSellingPlanAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setSellingPlan($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPlan());
    }

    /**
     * Test attribute "business"
     */
    public function testPropertyBusiness()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\Business();
        
        $this->model->setBusiness($testValue);
        $this->assertEquals($testValue, $this->model->getBusiness());
    }

    /**
     * Test attribute "primary_contact"
     */
    public function testPropertyPrimaryContact()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\PrimaryContact();
        
        $this->model->setPrimaryContact($testValue);
        $this->assertEquals($testValue, $this->model->getPrimaryContact());
    }
}
