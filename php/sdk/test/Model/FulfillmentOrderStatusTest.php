<?php
/**
 * FulfillmentOrderStatusTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentOrderStatus;

/**
 * FulfillmentOrderStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The current status of the fulfillment order.
 * @package     SpApi
 */
class FulfillmentOrderStatusTest extends TestCase
{

    private FulfillmentOrderStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentOrderStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentOrderStatus"
     */
    public function testFulfillmentOrderStatus()
    {
        $this->assertInstanceOf(FulfillmentOrderStatus::class, $this->model);
    }
}
