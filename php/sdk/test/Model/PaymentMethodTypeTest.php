<?php
/**
 * PaymentMethodTypeTest
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
use SpApi\Model\transfers\v2024_06_01\PaymentMethodType;

/**
 * PaymentMethodTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of payment method.
 * @package     SpApi
 */
class PaymentMethodTypeTest extends TestCase
{

    private PaymentMethodType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentMethodType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentMethodType"
     */
    public function testPaymentMethodType()
    {
        $this->assertInstanceOf(PaymentMethodType::class, $this->model);
    }
}
