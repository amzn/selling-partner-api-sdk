<?php
/**
 * PaymentExecutionDetailItemTest
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
use SpApi\Model\orders\v0\PaymentExecutionDetailItem;

/**
 * PaymentExecutionDetailItemTest Class Doc Comment
 *
 * @category    Class
 * @description Information about a sub-payment method used to pay for a COD order.
 * @package     SpApi
 */
class PaymentExecutionDetailItemTest extends TestCase
{

    private PaymentExecutionDetailItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentExecutionDetailItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentExecutionDetailItem"
     */
    public function testPaymentExecutionDetailItem()
    {
        $this->assertInstanceOf(PaymentExecutionDetailItem::class, $this->model);
    }

    /**
     * Test attribute "payment"
     */
    public function testPropertyPayment()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setPayment($testValue);
        $this->assertEquals($testValue, $this->model->getPayment());
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
}
