<?php
/**
 * InvalidItemReasonCodeTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\InvalidItemReasonCode;

/**
 * InvalidItemReasonCodeTest Class Doc Comment
 *
 * @category    Class
 * @description A code for why the item is invalid for return.
 * @package     SpApi
 */
class InvalidItemReasonCodeTest extends TestCase
{

    private InvalidItemReasonCode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvalidItemReasonCode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvalidItemReasonCode"
     */
    public function testInvalidItemReasonCode()
    {
        $this->assertInstanceOf(InvalidItemReasonCode::class, $this->model);
    }
}
