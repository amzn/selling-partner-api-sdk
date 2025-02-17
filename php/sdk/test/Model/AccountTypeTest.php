<?php
/**
 * AccountTypeTest
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
use SpApi\Model\shipping\v2\AccountType;

/**
 * AccountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Shipper Account Type.
 * @package     SpApi
 */
class AccountTypeTest extends TestCase
{

    private AccountType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccountType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccountType"
     */
    public function testAccountType()
    {
        $this->assertInstanceOf(AccountType::class, $this->model);
    }
}
