<?php
/**
 * PaymentMethodDetailsTest
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
use SpApi\Model\transfers\v2024_06_01\PaymentMethodDetails;

/**
 * PaymentMethodDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The details of a payment method.
 * @package     SpApi
 */
class PaymentMethodDetailsTest extends TestCase
{

    private PaymentMethodDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentMethodDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentMethodDetails"
     */
    public function testPaymentMethodDetails()
    {
        $this->assertInstanceOf(PaymentMethodDetails::class, $this->model);
    }

    /**
     * Test attribute "account_holder_name"
     */
    public function testPropertyAccountHolderName()
    {
        $testValue = 'test';
        
        $this->model->setAccountHolderName($testValue);
        $this->assertEquals($testValue, $this->model->getAccountHolderName());
    }

    /**
     * Test attribute "payment_method_id"
     */
    public function testPropertyPaymentMethodId()
    {
        $testValue = 'test';
        
        $this->model->setPaymentMethodId($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethodId());
    }

    /**
     * Test attribute "tail"
     */
    public function testPropertyTail()
    {
        $testValue = 'test';
        
        $this->model->setTail($testValue);
        $this->assertEquals($testValue, $this->model->getTail());
    }

    /**
     * Test attribute "expiry_date"
     */
    public function testPropertyExpiryDate()
    {
        
        $testValue = new \SpApi\Model\transfers\v2024_06_01\ExpiryDate();
        
        $this->model->setExpiryDate($testValue);
        $this->assertEquals($testValue, $this->model->getExpiryDate());
    }

    /**
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }

    /**
     * Test attribute "payment_method_type"
     */
    public function testPropertyPaymentMethodType()
    {
        $enumInstance = new \SpApi\Model\transfers\v2024_06_01\PaymentMethodType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPaymentMethodType($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethodType());
    }

    /**
     * Test attribute "assignment_type"
     */
    public function testPropertyAssignmentType()
    {
        $enumInstance = new \SpApi\Model\transfers\v2024_06_01\AssignmentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAssignmentType($testValue);
        $this->assertEquals($testValue, $this->model->getAssignmentType());
    }
}
