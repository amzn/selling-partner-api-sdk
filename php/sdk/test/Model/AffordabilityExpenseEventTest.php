<?php
/**
 * AffordabilityExpenseEventTest
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
use SpApi\Model\finances\v0\AffordabilityExpenseEvent;

/**
 * AffordabilityExpenseEventTest Class Doc Comment
 *
 * @category    Class
 * @description An expense related to an affordability promotion.
 * @package     SpApi
 */
class AffordabilityExpenseEventTest extends TestCase
{

    private AffordabilityExpenseEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AffordabilityExpenseEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AffordabilityExpenseEvent"
     */
    public function testAffordabilityExpenseEvent()
    {
        $this->assertInstanceOf(AffordabilityExpenseEvent::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
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
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
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
     * Test attribute "base_expense"
     */
    public function testPropertyBaseExpense()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setBaseExpense($testValue);
        $this->assertEquals($testValue, $this->model->getBaseExpense());
    }

    /**
     * Test attribute "tax_type_cgst"
     */
    public function testPropertyTaxTypeCgst()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxTypeCgst($testValue);
        $this->assertEquals($testValue, $this->model->getTaxTypeCgst());
    }

    /**
     * Test attribute "tax_type_sgst"
     */
    public function testPropertyTaxTypeSgst()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxTypeSgst($testValue);
        $this->assertEquals($testValue, $this->model->getTaxTypeSgst());
    }

    /**
     * Test attribute "tax_type_igst"
     */
    public function testPropertyTaxTypeIgst()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxTypeIgst($testValue);
        $this->assertEquals($testValue, $this->model->getTaxTypeIgst());
    }

    /**
     * Test attribute "total_expense"
     */
    public function testPropertyTotalExpense()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTotalExpense($testValue);
        $this->assertEquals($testValue, $this->model->getTotalExpense());
    }
}
