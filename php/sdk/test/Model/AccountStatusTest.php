<?php
/**
 * AccountStatusTest
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
use OpenAPI\Client\Model\shipping\AccountStatus;

/**
 * AccountStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Account Status.
 * @package     OpenAPI\Client
 */
class AccountStatusTest extends TestCase
{

    private AccountStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccountStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccountStatus"
     */
    public function testAccountStatus()
    {
        $this->assertInstanceOf(AccountStatus::class, $this->model);
    }
}
