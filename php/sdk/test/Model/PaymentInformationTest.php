<?php
/**
 * PaymentInformationTest
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
use OpenAPI\Client\Model\fulfillment\outbound\PaymentInformation;

/**
 * PaymentInformationTest Class Doc Comment
 *
 * @category    Class
 * @description The attributes related to the payment made from customer to seller for this order.
 * @package     OpenAPI\Client
 */
class PaymentInformationTest extends TestCase
{

    private PaymentInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentInformation"
     */
    public function testPaymentInformation()
    {
        $this->assertInstanceOf(PaymentInformation::class, $this->model);
    }

    /**
     * Test attribute "payment_transaction_id"
     */
    public function testPropertyPaymentTransactionId()
    {
        $testValue = 'test';
        
        $this->model->setPaymentTransactionId($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentTransactionId());
    }

    /**
     * Test attribute "payment_mode"
     */
    public function testPropertyPaymentMode()
    {
        $testValue = 'test';
        
        $this->model->setPaymentMode($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMode());
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
}
