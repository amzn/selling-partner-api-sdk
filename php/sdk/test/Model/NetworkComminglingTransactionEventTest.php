<?php
/**
 * NetworkComminglingTransactionEventTest
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
use SpApi\Model\finances\v0\NetworkComminglingTransactionEvent;

/**
 * NetworkComminglingTransactionEventTest Class Doc Comment
 *
 * @category    Class
 * @description A network commingling transaction event.
 * @package     SpApi
 */
class NetworkComminglingTransactionEventTest extends TestCase
{

    private NetworkComminglingTransactionEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new NetworkComminglingTransactionEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "NetworkComminglingTransactionEvent"
     */
    public function testNetworkComminglingTransactionEvent()
    {
        $this->assertInstanceOf(NetworkComminglingTransactionEvent::class, $this->model);
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
     * Test attribute "net_co_transaction_id"
     */
    public function testPropertyNetCoTransactionId()
    {
        $testValue = 'test';
        
        $this->model->setNetCoTransactionId($testValue);
        $this->assertEquals($testValue, $this->model->getNetCoTransactionId());
    }

    /**
     * Test attribute "swap_reason"
     */
    public function testPropertySwapReason()
    {
        $testValue = 'test';
        
        $this->model->setSwapReason($testValue);
        $this->assertEquals($testValue, $this->model->getSwapReason());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
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
     * Test attribute "tax_exclusive_amount"
     */
    public function testPropertyTaxExclusiveAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxExclusiveAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTaxExclusiveAmount());
    }

    /**
     * Test attribute "tax_amount"
     */
    public function testPropertyTaxAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTaxAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTaxAmount());
    }
}
