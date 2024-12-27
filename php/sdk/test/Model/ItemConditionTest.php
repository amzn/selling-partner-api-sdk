<?php
/**
 * ItemConditionTest
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
use OpenAPI\Client\Model\pricingv0\ItemCondition;

/**
 * ItemConditionTest Class Doc Comment
 *
 * @category    Class
 * @description Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
 * @package     OpenAPI\Client
 */
class ItemConditionTest extends TestCase
{

    private ItemCondition $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemCondition();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemCondition"
     */
    public function testItemCondition()
    {
        $this->assertInstanceOf(ItemCondition::class, $this->model);
    }
}
