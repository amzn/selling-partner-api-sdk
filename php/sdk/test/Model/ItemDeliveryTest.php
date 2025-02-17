<?php
/**
 * ItemDeliveryTest
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
use SpApi\Model\services\v1\ItemDelivery;

/**
 * ItemDeliveryTest Class Doc Comment
 *
 * @category    Class
 * @description Delivery information for the item.
 * @package     SpApi
 */
class ItemDeliveryTest extends TestCase
{

    private ItemDelivery $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemDelivery();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemDelivery"
     */
    public function testItemDelivery()
    {
        $this->assertInstanceOf(ItemDelivery::class, $this->model);
    }

    /**
     * Test attribute "estimated_delivery_date"
     */
    public function testPropertyEstimatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedDeliveryDate());
    }

    /**
     * Test attribute "item_delivery_promise"
     */
    public function testPropertyItemDeliveryPromise()
    {
        
        $testValue = new \SpApi\Model\services\v1\ItemDeliveryPromise();
        
        $this->model->setItemDeliveryPromise($testValue);
        $this->assertEquals($testValue, $this->model->getItemDeliveryPromise());
    }
}
