<?php
/**
 * TransactionTest
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
use SpApi\Model\finances\v2024_06_19\Transaction;

/**
 * TransactionTest Class Doc Comment
 *
 * @category    Class
 * @description Contains all information related to the transaction.
 * @package     SpApi
 */
class TransactionTest extends TestCase
{

    private Transaction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Transaction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Transaction"
     */
    public function testTransaction()
    {
        $this->assertInstanceOf(Transaction::class, $this->model);
    }

    /**
     * Test attribute "selling_partner_metadata"
     */
    public function testPropertySellingPartnerMetadata()
    {
        
        $testValue = new \SpApi\Model\finances\v2024_06_19\SellingPartnerMetadata();
        
        $this->model->setSellingPartnerMetadata($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPartnerMetadata());
    }

    /**
     * Test attribute "related_identifiers"
     */
    public function testPropertyRelatedIdentifiers()
    {
        $testValue = [];
        
        $this->model->setRelatedIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getRelatedIdentifiers());
    }

    /**
     * Test attribute "transaction_type"
     */
    public function testPropertyTransactionType()
    {
        $testValue = 'test';
        
        $this->model->setTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionType());
    }

    /**
     * Test attribute "transaction_id"
     */
    public function testPropertyTransactionId()
    {
        $testValue = 'test';
        
        $this->model->setTransactionId($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionId());
    }

    /**
     * Test attribute "transaction_status"
     */
    public function testPropertyTransactionStatus()
    {
        $testValue = 'test';
        
        $this->model->setTransactionStatus($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionStatus());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }

    /**
     * Test attribute "total_amount"
     */
    public function testPropertyTotalAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v2024_06_19\Currency();
        
        $this->model->setTotalAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalAmount());
    }

    /**
     * Test attribute "marketplace_details"
     */
    public function testPropertyMarketplaceDetails()
    {
        
        $testValue = new \SpApi\Model\finances\v2024_06_19\MarketplaceDetails();
        
        $this->model->setMarketplaceDetails($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceDetails());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }

    /**
     * Test attribute "contexts"
     */
    public function testPropertyContexts()
    {
        $testValue = [];
        
        $this->model->setContexts($testValue);
        $this->assertEquals($testValue, $this->model->getContexts());
    }

    /**
     * Test attribute "breakdowns"
     */
    public function testPropertyBreakdowns()
    {
        $testValue = [];
        
        $this->model->setBreakdowns($testValue);
        $this->assertEquals($testValue, $this->model->getBreakdowns());
    }
}
