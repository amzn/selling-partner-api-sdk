<?php
/**
 * PaymentMethodTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\transfers\v2024_06_01\PaymentMethodType;

/**
 * PaymentMethodTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of payment method.
 * @package     OpenAPI\Client
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
