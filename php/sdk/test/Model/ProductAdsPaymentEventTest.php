<?php
/**
 * ProductAdsPaymentEventTest
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
use OpenAPI\Client\Model\financesv0\ProductAdsPaymentEvent;

/**
 * ProductAdsPaymentEventTest Class Doc Comment
 *
 * @category    Class
 * @description A Sponsored Products payment event.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\financesv0\Currency();
        
        $this->model->setBaseValue($testValue);
        $this->assertEquals($testValue, $this->model->getBaseValue());
    }

    /**
     * Test attribute "tax_value"
     */
    public function testPropertyTaxValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesv0\Currency();
        
        $this->model->setTaxValue($testValue);
        $this->assertEquals($testValue, $this->model->getTaxValue());
    }

    /**
     * Test attribute "transaction_value"
     */
    public function testPropertyTransactionValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesv0\Currency();
        
        $this->model->setTransactionValue($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionValue());
    }
}
