<?php
/**
 * FBALiquidationEventTest
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
use OpenAPI\Client\Model\financesV0\FBALiquidationEvent;

/**
 * FBALiquidationEventTest Class Doc Comment
 *
 * @category    Class
 * @description A payment event for Fulfillment by Amazon (FBA) inventory liquidation. This event is used only in the US marketplace.
 * @package     OpenAPI\Client
 */
class FBALiquidationEventTest extends TestCase
{

    private FBALiquidationEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FBALiquidationEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FBALiquidationEvent"
     */
    public function testFBALiquidationEvent()
    {
        $this->assertInstanceOf(FBALiquidationEvent::class, $this->model);
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
     * Test attribute "original_removal_order_id"
     */
    public function testPropertyOriginalRemovalOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOriginalRemovalOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOriginalRemovalOrderId());
    }

    /**
     * Test attribute "liquidation_proceeds_amount"
     */
    public function testPropertyLiquidationProceedsAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesV0\Currency();
        
        $this->model->setLiquidationProceedsAmount($testValue);
        $this->assertEquals($testValue, $this->model->getLiquidationProceedsAmount());
    }

    /**
     * Test attribute "liquidation_fee_amount"
     */
    public function testPropertyLiquidationFeeAmount()
    {
        
        $testValue = new \OpenAPI\Client\Model\financesV0\Currency();
        
        $this->model->setLiquidationFeeAmount($testValue);
        $this->assertEquals($testValue, $this->model->getLiquidationFeeAmount());
    }
}
