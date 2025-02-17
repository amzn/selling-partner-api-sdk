<?php
/**
 * ChargeRefundEventTest
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
use SpApi\Model\finances\v0\ChargeRefundEvent;

/**
 * ChargeRefundEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to charge refund.
 * @package     SpApi
 */
class ChargeRefundEventTest extends TestCase
{

    private ChargeRefundEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ChargeRefundEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ChargeRefundEvent"
     */
    public function testChargeRefundEvent()
    {
        $this->assertInstanceOf(ChargeRefundEvent::class, $this->model);
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
     * Test attribute "reason_code"
     */
    public function testPropertyReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCode());
    }

    /**
     * Test attribute "reason_code_description"
     */
    public function testPropertyReasonCodeDescription()
    {
        $testValue = 'test';
        
        $this->model->setReasonCodeDescription($testValue);
        $this->assertEquals($testValue, $this->model->getReasonCodeDescription());
    }

    /**
     * Test attribute "charge_refund_transactions"
     */
    public function testPropertyChargeRefundTransactions()
    {
        $testValue = [];
        
        $this->model->setChargeRefundTransactions($testValue);
        $this->assertEquals($testValue, $this->model->getChargeRefundTransactions());
    }
}
