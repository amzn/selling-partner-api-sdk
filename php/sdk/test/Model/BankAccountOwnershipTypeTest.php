<?php
/**
 * BankAccountOwnershipTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\BankAccountOwnershipType;

/**
 * BankAccountOwnershipTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The destination bank account&#39;s ownership type.
 * @package     SpApi
 */
class BankAccountOwnershipTypeTest extends TestCase
{

    private BankAccountOwnershipType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BankAccountOwnershipType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BankAccountOwnershipType"
     */
    public function testBankAccountOwnershipType()
    {
        $this->assertInstanceOf(BankAccountOwnershipType::class, $this->model);
    }
}
