<?php
/**
 * SortOrderTest
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
use OpenAPI\Client\Model\awd\SortOrder;

/**
 * SortOrderTest Class Doc Comment
 *
 * @category    Class
 * @description Sort order for a collection of items. For example, order or shipment.
 * @package     OpenAPI\Client
 */
class SortOrderTest extends TestCase
{

    private SortOrder $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SortOrder();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SortOrder"
     */
    public function testSortOrder()
    {
        $this->assertInstanceOf(SortOrder::class, $this->model);
    }
}
