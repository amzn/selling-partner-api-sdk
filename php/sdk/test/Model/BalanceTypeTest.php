<?php
/**
 * BalanceTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\BalanceType;

/**
 * BalanceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of bank account balance.
 * @package     SpApi
 */
class BalanceTypeTest extends TestCase
{

    private BalanceType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BalanceType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BalanceType"
     */
    public function testBalanceType()
    {
        $this->assertInstanceOf(BalanceType::class, $this->model);
    }
}
