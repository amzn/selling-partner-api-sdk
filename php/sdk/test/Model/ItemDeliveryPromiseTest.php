<?php
/**
 * ItemDeliveryPromiseTest
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
use OpenAPI\Client\Model\services\v1\ItemDeliveryPromise;

/**
 * ItemDeliveryPromiseTest Class Doc Comment
 *
 * @category    Class
 * @description Promised delivery information for the item.
 * @package     OpenAPI\Client
 */
class ItemDeliveryPromiseTest extends TestCase
{

    private ItemDeliveryPromise $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemDeliveryPromise();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemDeliveryPromise"
     */
    public function testItemDeliveryPromise()
    {
        $this->assertInstanceOf(ItemDeliveryPromise::class, $this->model);
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }
}
