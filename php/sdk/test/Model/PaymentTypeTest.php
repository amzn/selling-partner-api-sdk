<?php
/**
 * PaymentTypeTest
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
use SpApi\Model\shipping\v2\PaymentType;

/**
 * PaymentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Payment type of the purchase.
 * @package     SpApi
 */
class PaymentTypeTest extends TestCase
{

    private PaymentType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PaymentType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PaymentType"
     */
    public function testPaymentType()
    {
        $this->assertInstanceOf(PaymentType::class, $this->model);
    }
}
