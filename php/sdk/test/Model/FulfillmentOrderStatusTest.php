<?php
/**
 * FulfillmentOrderStatusTest
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
use OpenAPI\Client\Model\fulfillmentoutbound\FulfillmentOrderStatus;

/**
 * FulfillmentOrderStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The current status of the fulfillment order.
 * @package     OpenAPI\Client
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
