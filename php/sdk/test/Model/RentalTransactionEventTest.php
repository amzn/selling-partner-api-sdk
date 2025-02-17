<?php
/**
 * RentalTransactionEventTest
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
use SpApi\Model\finances\v0\RentalTransactionEvent;

/**
 * RentalTransactionEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to a rental transaction.
 * @package     SpApi
 */
class RentalTransactionEventTest extends TestCase
{

    private RentalTransactionEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RentalTransactionEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RentalTransactionEvent"
     */
    public function testRentalTransactionEvent()
    {
        $this->assertInstanceOf(RentalTransactionEvent::class, $this->model);
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
     * Test attribute "rental_event_type"
     */
    public function testPropertyRentalEventType()
    {
        $testValue = 'test';
        
        $this->model->setRentalEventType($testValue);
        $this->assertEquals($testValue, $this->model->getRentalEventType());
    }

    /**
     * Test attribute "extension_length"
     */
    public function testPropertyExtensionLength()
    {
        $testValue = 123;
        
        $this->model->setExtensionLength($testValue);
        $this->assertEquals($testValue, $this->model->getExtensionLength());
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
     * Test attribute "rental_charge_list"
     */
    public function testPropertyRentalChargeList()
    {
        $testValue = [];
        
        $this->model->setRentalChargeList($testValue);
        $this->assertEquals($testValue, $this->model->getRentalChargeList());
    }

    /**
     * Test attribute "rental_fee_list"
     */
    public function testPropertyRentalFeeList()
    {
        $testValue = [];
        
        $this->model->setRentalFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getRentalFeeList());
    }

    /**
     * Test attribute "marketplace_name"
     */
    public function testPropertyMarketplaceName()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceName($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceName());
    }

    /**
     * Test attribute "rental_initial_value"
     */
    public function testPropertyRentalInitialValue()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setRentalInitialValue($testValue);
        $this->assertEquals($testValue, $this->model->getRentalInitialValue());
    }

    /**
     * Test attribute "rental_reimbursement"
     */
    public function testPropertyRentalReimbursement()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setRentalReimbursement($testValue);
        $this->assertEquals($testValue, $this->model->getRentalReimbursement());
    }

    /**
     * Test attribute "rental_tax_withheld_list"
     */
    public function testPropertyRentalTaxWithheldList()
    {
        $testValue = [];
        
        $this->model->setRentalTaxWithheldList($testValue);
        $this->assertEquals($testValue, $this->model->getRentalTaxWithheldList());
    }
}
