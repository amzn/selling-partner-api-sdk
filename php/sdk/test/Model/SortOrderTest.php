<?php
/**
 * SortOrderTest
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
use SpApi\Model\replenishment\v2022_11_07\SortOrder;

/**
 * SortOrderTest Class Doc Comment
 *
 * @category    Class
 * @description The sort order.
 * @package     SpApi
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
