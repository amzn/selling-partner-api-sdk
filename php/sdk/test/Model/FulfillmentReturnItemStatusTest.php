<?php
/**
 * FulfillmentReturnItemStatusTest
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
use OpenAPI\Client\Model\fulfillment\outbound\v2020_07_01\FulfillmentReturnItemStatus;

/**
 * FulfillmentReturnItemStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates if the return item has been processed by a fulfillment center.
 * @package     OpenAPI\Client
 */
class FulfillmentReturnItemStatusTest extends TestCase
{

    private FulfillmentReturnItemStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentReturnItemStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentReturnItemStatus"
     */
    public function testFulfillmentReturnItemStatus()
    {
        $this->assertInstanceOf(FulfillmentReturnItemStatus::class, $this->model);
    }
}
