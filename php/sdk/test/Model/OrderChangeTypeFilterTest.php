<?php
/**
 * OrderChangeTypeFilterTest
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
use OpenAPI\Client\Model\notifications\v1\OrderChangeTypeFilter;

/**
 * OrderChangeTypeFilterTest Class Doc Comment
 *
 * @category    Class
 * @description An event filter to customize your subscription to send notifications for only the specified &#x60;orderChangeType&#x60;.
 * @package     OpenAPI\Client
 */
class OrderChangeTypeFilterTest extends TestCase
{

    private OrderChangeTypeFilter $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderChangeTypeFilter();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderChangeTypeFilter"
     */
    public function testOrderChangeTypeFilter()
    {
        $this->assertInstanceOf(OrderChangeTypeFilter::class, $this->model);
    }

    /**
     * Test attribute "order_change_types"
     */
    public function testPropertyOrderChangeTypes()
    {
        $testValue = [];
        
        $this->model->setOrderChangeTypes($testValue);
        $this->assertEquals($testValue, $this->model->getOrderChangeTypes());
    }
}
