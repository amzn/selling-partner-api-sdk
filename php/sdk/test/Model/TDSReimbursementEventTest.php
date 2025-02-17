<?php
/**
 * TDSReimbursementEventTest
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
use SpApi\Model\finances\v0\TDSReimbursementEvent;

/**
 * TDSReimbursementEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to a Tax-Deducted-at-Source (TDS) reimbursement.
 * @package     SpApi
 */
class TDSReimbursementEventTest extends TestCase
{

    private TDSReimbursementEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TDSReimbursementEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TDSReimbursementEvent"
     */
    public function testTDSReimbursementEvent()
    {
        $this->assertInstanceOf(TDSReimbursementEvent::class, $this->model);
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
     * Test attribute "tds_order_id"
     */
    public function testPropertyTdsOrderId()
    {
        $testValue = 'test';
        
        $this->model->setTdsOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getTdsOrderId());
    }

    /**
     * Test attribute "reimbursed_amount"
     */
    public function testPropertyReimbursedAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setReimbursedAmount($testValue);
        $this->assertEquals($testValue, $this->model->getReimbursedAmount());
    }
}
