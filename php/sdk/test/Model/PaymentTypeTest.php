<?php
/**
 * PaymentTypeTest
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
use OpenAPI\Client\Model\shipping\PaymentType;

/**
 * PaymentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Payment type of the purchase.
 * @package     OpenAPI\Client
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
