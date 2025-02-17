<?php
/**
 * BuyerRequestedCancelTest
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
use SpApi\Model\orders\v0\BuyerRequestedCancel;

/**
 * BuyerRequestedCancelTest Class Doc Comment
 *
 * @category    Class
 * @description Information about whether or not a buyer requested cancellation.
 * @package     SpApi
 */
class BuyerRequestedCancelTest extends TestCase
{

    private BuyerRequestedCancel $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BuyerRequestedCancel();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BuyerRequestedCancel"
     */
    public function testBuyerRequestedCancel()
    {
        $this->assertInstanceOf(BuyerRequestedCancel::class, $this->model);
    }

    /**
     * Test attribute "is_buyer_requested_cancel"
     */
    public function testPropertyIsBuyerRequestedCancel()
    {
        $testValue = 'test';
        
        $this->model->setIsBuyerRequestedCancel($testValue);
        $this->assertEquals($testValue, $this->model->getIsBuyerRequestedCancel());
    }

    /**
     * Test attribute "buyer_cancel_reason"
     */
    public function testPropertyBuyerCancelReason()
    {
        $testValue = 'test';
        
        $this->model->setBuyerCancelReason($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerCancelReason());
    }
}
