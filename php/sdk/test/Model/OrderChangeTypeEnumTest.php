<?php
/**
 * OrderChangeTypeEnumTest
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
use OpenAPI\Client\Model\notifications\v1\OrderChangeTypeEnum;

/**
 * OrderChangeTypeEnumTest Class Doc Comment
 *
 * @category    Class
 * @description The supported order change type of ORDER_CHANGE notification.
 * @package     OpenAPI\Client
 */
class OrderChangeTypeEnumTest extends TestCase
{

    private OrderChangeTypeEnum $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderChangeTypeEnum();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderChangeTypeEnum"
     */
    public function testOrderChangeTypeEnum()
    {
        $this->assertInstanceOf(OrderChangeTypeEnum::class, $this->model);
    }
}
