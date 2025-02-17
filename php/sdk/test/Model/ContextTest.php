<?php
/**
 * ContextTest
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
use SpApi\Model\finances\v2024_06_19\Context;

/**
 * ContextTest Class Doc Comment
 *
 * @category    Class
 * @description Additional Information about the item.
 * @package     SpApi
 */
class ContextTest extends TestCase
{

    private Context $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Context();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Context"
     */
    public function testContext()
    {
        $this->assertInstanceOf(Context::class, $this->model);
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
     * Test attribute "order_type"
     */
    public function testPropertyOrderType()
    {
        $testValue = 'test';
        
        $this->model->setOrderType($testValue);
        $this->assertEquals($testValue, $this->model->getOrderType());
    }

    /**
     * Test attribute "channel"
     */
    public function testPropertyChannel()
    {
        $testValue = 'test';
        
        $this->model->setChannel($testValue);
        $this->assertEquals($testValue, $this->model->getChannel());
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
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "quantity_shipped"
     */
    public function testPropertyQuantityShipped()
    {
        $testValue = 123;
        
        $this->model->setQuantityShipped($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityShipped());
    }

    /**
     * Test attribute "fulfillment_network"
     */
    public function testPropertyFulfillmentNetwork()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentNetwork($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentNetwork());
    }

    /**
     * Test attribute "payment_type"
     */
    public function testPropertyPaymentType()
    {
        $testValue = 'test';
        
        $this->model->setPaymentType($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentType());
    }

    /**
     * Test attribute "payment_method"
     */
    public function testPropertyPaymentMethod()
    {
        $testValue = 'test';
        
        $this->model->setPaymentMethod($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethod());
    }

    /**
     * Test attribute "payment_reference"
     */
    public function testPropertyPaymentReference()
    {
        $testValue = 'test';
        
        $this->model->setPaymentReference($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentReference());
    }

    /**
     * Test attribute "payment_date"
     */
    public function testPropertyPaymentDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPaymentDate($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentDate());
    }

    /**
     * Test attribute "deferral_reason"
     */
    public function testPropertyDeferralReason()
    {
        $testValue = 'test';
        
        $this->model->setDeferralReason($testValue);
        $this->assertEquals($testValue, $this->model->getDeferralReason());
    }

    /**
     * Test attribute "maturity_date"
     */
    public function testPropertyMaturityDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setMaturityDate($testValue);
        $this->assertEquals($testValue, $this->model->getMaturityDate());
    }

    /**
     * Test attribute "deferral_status"
     */
    public function testPropertyDeferralStatus()
    {
        $testValue = 'test';
        
        $this->model->setDeferralStatus($testValue);
        $this->assertEquals($testValue, $this->model->getDeferralStatus());
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }

    /**
     * Test attribute "context_type"
     */
    public function testPropertyContextType()
    {
        $testValue = 'test';
        
        $this->model->setContextType($testValue);
        $this->assertEquals($testValue, $this->model->getContextType());
    }
}
