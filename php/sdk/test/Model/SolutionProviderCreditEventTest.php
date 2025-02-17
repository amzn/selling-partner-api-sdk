<?php
/**
 * SolutionProviderCreditEventTest
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
use SpApi\Model\finances\v0\SolutionProviderCreditEvent;

/**
 * SolutionProviderCreditEventTest Class Doc Comment
 *
 * @category    Class
 * @description A credit given to a solution provider.
 * @package     SpApi
 */
class SolutionProviderCreditEventTest extends TestCase
{

    private SolutionProviderCreditEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SolutionProviderCreditEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SolutionProviderCreditEvent"
     */
    public function testSolutionProviderCreditEvent()
    {
        $this->assertInstanceOf(SolutionProviderCreditEvent::class, $this->model);
    }

    /**
     * Test attribute "provider_transaction_type"
     */
    public function testPropertyProviderTransactionType()
    {
        $testValue = 'test';
        
        $this->model->setProviderTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getProviderTransactionType());
    }

    /**
     * Test attribute "seller_order_id"
     */
    public function testPropertySellerOrderId()
    {
        $testValue = 'test';
        
        $this->model->setSellerOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerOrderId());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "marketplace_country_code"
     */
    public function testPropertyMarketplaceCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceCountryCode());
    }

    /**
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
    }

    /**
     * Test attribute "seller_store_name"
     */
    public function testPropertySellerStoreName()
    {
        $testValue = 'test';
        
        $this->model->setSellerStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getSellerStoreName());
    }

    /**
     * Test attribute "provider_id"
     */
    public function testPropertyProviderId()
    {
        $testValue = 'test';
        
        $this->model->setProviderId($testValue);
        $this->assertEquals($testValue, $this->model->getProviderId());
    }

    /**
     * Test attribute "provider_store_name"
     */
    public function testPropertyProviderStoreName()
    {
        $testValue = 'test';
        
        $this->model->setProviderStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getProviderStoreName());
    }

    /**
     * Test attribute "transaction_amount"
     */
    public function testPropertyTransactionAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTransactionAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionAmount());
    }

    /**
     * Test attribute "transaction_creation_date"
     */
    public function testPropertyTransactionCreationDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setTransactionCreationDate($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionCreationDate());
    }
}
