<?php
/**
 * PaymentsContextTest
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
use SpApi\Model\finances\v2024_06_19\PaymentsContext;

/**
 * PaymentsContextTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to Payments related transactions.
 * @package     SpApi
 */
class PaymentsContextTest extends TestCase
{

    private PaymentsContext $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentsContext();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentsContext"
     */
    public function testPaymentsContext()
    {
        $this->assertInstanceOf(PaymentsContext::class, $this->model);
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
}
