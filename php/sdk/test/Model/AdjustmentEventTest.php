<?php
/**
 * AdjustmentEventTest
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
use OpenAPI\Client\Model\financesv0\AdjustmentEvent;

/**
 * AdjustmentEventTest Class Doc Comment
 *
 * @category    Class
 * @description An adjustment to the seller&#39;s account.
 * @package     OpenAPI\Client
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
     * Test attribute "adjustment_amount"
     */
    public function testPropertyAdjustmentAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesv0\Currency();
        
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
