<?php
/**
 * ItemProcurementTest
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
use OpenAPI\Client\Model\listings\items\v2021_08_01\ItemProcurement;

/**
 * ItemProcurementTest Class Doc Comment
 *
 * @category    Class
 * @description The vendor procurement information for the listings item.
 * @package     OpenAPI\Client
 */
class ItemProcurementTest extends TestCase
{

    private ItemProcurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemProcurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemProcurement"
     */
    public function testItemProcurement()
    {
        $this->assertInstanceOf(ItemProcurement::class, $this->model);
    }

    /**
     * Test attribute "cost_price"
     */
    public function testPropertyCostPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\listings\items\v2021_08_01\Money();
        
        $this->model->setCostPrice($testValue);
        $this->assertEquals($testValue, $this->model->getCostPrice());
    }
}
