<?php
/**
 * AdjustmentEventTest
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
use SpApi\Model\finances\v0\AdjustmentEvent;

/**
 * AdjustmentEventTest Class Doc Comment
 *
 * @category    Class
 * @description An adjustment to the seller&#39;s account.
 * @package     SpApi
 */
class AdjustmentEventTest extends TestCase
{

    private AdjustmentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdjustmentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdjustmentEvent"
     */
    public function testAdjustmentEvent()
    {
        $this->assertInstanceOf(AdjustmentEvent::class, $this->model);
    }

    /**
     * Test attribute "adjustment_type"
     */
    public function testPropertyAdjustmentType()
    {
        $testValue = 'test';
        
        $this->model->setAdjustmentType($testValue);
        $this->assertEquals($testValue, $this->model->getAdjustmentType());
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
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $testValue = 'test';
        
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }

    /**
     * Test attribute "adjustment_amount"
     */
    public function testPropertyAdjustmentAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setAdjustmentAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAdjustmentAmount());
    }

    /**
     * Test attribute "adjustment_item_list"
     */
    public function testPropertyAdjustmentItemList()
    {
        $testValue = [];
        
        $this->model->setAdjustmentItemList($testValue);
        $this->assertEquals($testValue, $this->model->getAdjustmentItemList());
    }
}
