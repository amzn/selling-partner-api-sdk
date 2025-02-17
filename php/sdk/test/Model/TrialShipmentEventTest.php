<?php
/**
 * TrialShipmentEventTest
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
use SpApi\Model\finances\v0\TrialShipmentEvent;

/**
 * TrialShipmentEventTest Class Doc Comment
 *
 * @category    Class
 * @description An event related to a trial shipment.
 * @package     SpApi
 */
class TrialShipmentEventTest extends TestCase
{

    private TrialShipmentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrialShipmentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrialShipmentEvent"
     */
    public function testTrialShipmentEvent()
    {
        $this->assertInstanceOf(TrialShipmentEvent::class, $this->model);
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
     * Test attribute "financial_event_group_id"
     */
    public function testPropertyFinancialEventGroupId()
    {
        $testValue = 'test';
        
        $this->model->setFinancialEventGroupId($testValue);
        $this->assertEquals($testValue, $this->model->getFinancialEventGroupId());
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
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "fee_list"
     */
    public function testPropertyFeeList()
    {
        $testValue = [];
        
        $this->model->setFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getFeeList());
    }
}
