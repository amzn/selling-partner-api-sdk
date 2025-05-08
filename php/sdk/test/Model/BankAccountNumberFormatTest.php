<?php
/**
 * BankAccountNumberFormatTest
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
use SpApi\Model\sellerWallet\v2024_03_01\BankAccountNumberFormat;

/**
 * BankAccountNumberFormatTest Class Doc Comment
 *
 * @category    Class
 * @description The bank account&#39;s format type.
 * @package     SpApi
 */
class BankAccountNumberFormatTest extends TestCase
{

    private BankAccountNumberFormat $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BankAccountNumberFormat();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BankAccountNumberFormat"
     */
    public function testBankAccountNumberFormat()
    {
        $this->assertInstanceOf(BankAccountNumberFormat::class, $this->model);
    }
}
