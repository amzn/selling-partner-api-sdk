<?php
/**
 * PaymentTermsTest
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
use SpApi\Model\vendor\invoices\v1\PaymentTerms;

/**
 * PaymentTermsTest Class Doc Comment
 *
 * @category    Class
 * @description Terms of the payment for the invoice. The basis of the payment terms is the invoice date.
 * @package     SpApi
 */
class PaymentTermsTest extends TestCase
{

    private PaymentTerms $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentTerms();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentTerms"
     */
    public function testPaymentTerms()
    {
        $this->assertInstanceOf(PaymentTerms::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new PaymentTerms();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "discount_percent"
     */
    public function testPropertyDiscountPercent()
    {
        $testValue = 'test';
        
        $this->model->setDiscountPercent($testValue);
        $this->assertEquals($testValue, $this->model->getDiscountPercent());
    }

    /**
     * Test attribute "discount_due_days"
     */
    public function testPropertyDiscountDueDays()
    {
        $testValue = 1;
        
        $this->model->setDiscountDueDays($testValue);
        $this->assertEquals($testValue, $this->model->getDiscountDueDays());
    }

    /**
     * Test attribute "net_due_days"
     */
    public function testPropertyNetDueDays()
    {
        $testValue = 1;
        
        $this->model->setNetDueDays($testValue);
        $this->assertEquals($testValue, $this->model->getNetDueDays());
    }
}
