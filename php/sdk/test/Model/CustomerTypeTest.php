<?php
/**
 * CustomerTypeTest
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
use OpenAPI\Client\Model\pricing\v0\CustomerType;

/**
 * CustomerTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether to request Consumer or Business offers. Default is Consumer.
 * @package     OpenAPI\Client
 */
class CustomerTypeTest extends TestCase
{

    private CustomerType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CustomerType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CustomerType"
     */
    public function testCustomerType()
    {
        $this->assertInstanceOf(CustomerType::class, $this->model);
    }
}
