<?php
/**
 * AdhocDisbursementEventTest
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
use SpApi\Model\finances\v0\AdhocDisbursementEvent;

/**
 * AdhocDisbursementEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to an Adhoc Disbursement.
 * @package     SpApi
 */
class AdhocDisbursementEventTest extends TestCase
{

    private AdhocDisbursementEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdhocDisbursementEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdhocDisbursementEvent"
     */
    public function testAdhocDisbursementEvent()
    {
        $this->assertInstanceOf(AdhocDisbursementEvent::class, $this->model);
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
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
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
     * Test attribute "transaction_amount"
     */
    public function testPropertyTransactionAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTransactionAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionAmount());
    }
}
