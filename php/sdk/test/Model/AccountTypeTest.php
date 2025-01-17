<?php
/**
 * AccountTypeTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\shipping\AccountType;

/**
 * AccountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Shipper Account Type.
 * @package     OpenAPI\Client
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
