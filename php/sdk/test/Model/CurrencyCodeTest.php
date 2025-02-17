<?php
/**
 * CurrencyCodeTest
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
use SpApi\Model\fulfillment\inbound\v0\CurrencyCode;

/**
 * CurrencyCodeTest Class Doc Comment
 *
 * @category    Class
 * @description The currency code.
 * @package     SpApi
 */
class CurrencyCodeTest extends TestCase
{

    private CurrencyCode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CurrencyCode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CurrencyCode"
     */
    public function testCurrencyCode()
    {
        $this->assertInstanceOf(CurrencyCode::class, $this->model);
    }
}
