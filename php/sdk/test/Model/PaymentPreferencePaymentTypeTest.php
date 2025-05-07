<?php
/**
 * PaymentPreferencePaymentTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\PaymentPreferencePaymentType;

/**
 * PaymentPreferencePaymentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of payment preference.
 * @package     SpApi
 */
class PaymentPreferencePaymentTypeTest extends TestCase
{

    private PaymentPreferencePaymentType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentPreferencePaymentType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentPreferencePaymentType"
     */
    public function testPaymentPreferencePaymentType()
    {
        $this->assertInstanceOf(PaymentPreferencePaymentType::class, $this->model);
    }
}
