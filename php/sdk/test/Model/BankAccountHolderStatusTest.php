<?php
/**
 * BankAccountHolderStatusTest
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
use SpApi\Model\sellerWallet\v2024_03_01\BankAccountHolderStatus;

/**
 * BankAccountHolderStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the Amazon Seller Wallet account holder.
 * @package     SpApi
 */
class BankAccountHolderStatusTest extends TestCase
{

    private BankAccountHolderStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BankAccountHolderStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BankAccountHolderStatus"
     */
    public function testBankAccountHolderStatus()
    {
        $this->assertInstanceOf(BankAccountHolderStatus::class, $this->model);
    }
}
