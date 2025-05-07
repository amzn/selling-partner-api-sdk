<?php
/**
 * PaymentPreferenceTest
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
use SpApi\Model\sellerWallet\v2024_03_01\PaymentPreference;

/**
 * PaymentPreferenceTest Class Doc Comment
 *
 * @category    Class
 * @description The type of payment preference in which the transfer is being scheduled.
 * @package     SpApi
 */
class PaymentPreferenceTest extends TestCase
{

    private PaymentPreference $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentPreference();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentPreference"
     */
    public function testPaymentPreference()
    {
        $this->assertInstanceOf(PaymentPreference::class, $this->model);
    }

    /**
     * Test attribute "payment_preference_payment_type"
     */
    public function testPropertyPaymentPreferencePaymentType()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\PaymentPreferencePaymentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPaymentPreferencePaymentType($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentPreferencePaymentType());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 1;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
