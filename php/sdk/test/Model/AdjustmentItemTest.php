<?php
/**
 * AdjustmentItemTest
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
use SpApi\Model\finances\v0\AdjustmentItem;

/**
 * AdjustmentItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item in an adjustment to the seller&#39;s account.
 * @package     SpApi
 */
class AdjustmentItemTest extends TestCase
{

    private AdjustmentItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdjustmentItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdjustmentItem"
     */
    public function testAdjustmentItem()
    {
        $this->assertInstanceOf(AdjustmentItem::class, $this->model);
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 'test';
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "per_unit_amount"
     */
    public function testPropertyPerUnitAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setPerUnitAmount($testValue);
        $this->assertEquals($testValue, $this->model->getPerUnitAmount());
    }

    /**
     * Test attribute "total_amount"
     */
    public function testPropertyTotalAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTotalAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalAmount());
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "fn_sku"
     */
    public function testPropertyFnSku()
    {
        $testValue = 'test';
        
        $this->model->setFnSku($testValue);
        $this->assertEquals($testValue, $this->model->getFnSku());
    }

    /**
     * Test attribute "product_description"
     */
    public function testPropertyProductDescription()
    {
        $testValue = 'test';
        
        $this->model->setProductDescription($testValue);
        $this->assertEquals($testValue, $this->model->getProductDescription());
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
     * Test attribute "transaction_number"
     */
    public function testPropertyTransactionNumber()
    {
        $testValue = 'test';
        
        $this->model->setTransactionNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionNumber());
    }
}
