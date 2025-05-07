<?php
/**
 * TransactionTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransactionType;

/**
 * TransactionTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of transaction.
 * @package     SpApi
 */
class TransactionTypeTest extends TestCase
{

    private TransactionType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionType"
     */
    public function testTransactionType()
    {
        $this->assertInstanceOf(TransactionType::class, $this->model);
    }
}
