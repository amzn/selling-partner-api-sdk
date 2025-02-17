<?php
/**
 * ProductAdsPaymentEventTest
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
use SpApi\Model\finances\v0\ProductAdsPaymentEvent;

/**
 * ProductAdsPaymentEventTest Class Doc Comment
 *
 * @category    Class
 * @description A Sponsored Products payment event.
 * @package     SpApi
 */
class ProductAdsPaymentEventTest extends TestCase
{

    private ProductAdsPaymentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductAdsPaymentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductAdsPaymentEvent"
     */
    public function testProductAdsPaymentEvent()
    {
        $this->assertInstanceOf(ProductAdsPaymentEvent::class, $this->model);
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
     * Test attribute "transaction_type"
     */
    public function testPropertyTransactionType()
    {
        $testValue = 'test';
        
        $this->model->setTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionType());
    }

    /**
     * Test attribute "invoice_id"
     */
    public function testPropertyInvoiceId()
    {
        $testValue = 'test';
        
        $this->model->setInvoiceId($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceId());
    }

    /**
     * Test attribute "base_value"
     */
    public function testPropertyBaseValue()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setBaseValue($testValue);
        $this->assertEquals($testValue, $this->model->getBaseValue());
    }

    /**
     * Test attribute "tax_value"
     */
    public function testPropertyTaxValue()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxValue($testValue);
        $this->assertEquals($testValue, $this->model->getTaxValue());
    }

    /**
     * Test attribute "transaction_value"
     */
    public function testPropertyTransactionValue()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTransactionValue($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionValue());
    }
}
