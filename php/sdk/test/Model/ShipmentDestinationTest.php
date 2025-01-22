<?php
/**
 * ShipmentDestinationTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ShipmentDestination;

/**
 * ShipmentDestinationTest Class Doc Comment
 *
 * @category    Class
 * @description The Amazon fulfillment center address and warehouse ID.
 * @package     OpenAPI\Client
 */
class ShipmentDestinationTest extends TestCase
{

    private ShipmentDestination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentDestination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentDestination"
     */
    public function testShipmentDestination()
    {
        $this->assertInstanceOf(ShipmentDestination::class, $this->model);
    }

    /**
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
    }

    /**
     * Test attribute "destination_type"
     */
    public function testPropertyDestinationType()
    {
        $testValue = 'test';
        
        $this->model->setDestinationType($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationType());
    }

    /**
     * Test attribute "warehouse_id"
     */
    public function testPropertyWarehouseId()
    {
        $testValue = 'test';
        
        $this->model->setWarehouseId($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseId());
    }
}
