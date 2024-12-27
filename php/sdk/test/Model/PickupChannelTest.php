<?php
/**
 * PickupChannelTest
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
use OpenAPI\Client\Model\supplysources\PickupChannel;

/**
 * PickupChannelTest Class Doc Comment
 *
 * @category    Class
 * @description The pick up channel of a supply source.
 * @package     OpenAPI\Client
 */
class PickupChannelTest extends TestCase
{

    private PickupChannel $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PickupChannel();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PickupChannel"
     */
    public function testPickupChannel()
    {
        $this->assertInstanceOf(PickupChannel::class, $this->model);
    }

    /**
     * Test attribute "inventory_hold_period"
     */
    public function testPropertyInventoryHoldPeriod()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplysources\Duration();
        
        $this->model->setInventoryHoldPeriod($testValue);
        $this->assertEquals($testValue, $this->model->getInventoryHoldPeriod());
    }

    /**
     * Test attribute "is_supported"
     */
    public function testPropertyIsSupported()
    {
        $testValue = true;
        
        $this->model->setIsSupported($testValue);
        $this->assertEquals($testValue, $this->model->getIsSupported());
    }

    /**
     * Test attribute "operational_configuration"
     */
    public function testPropertyOperationalConfiguration()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplysources\OperationalConfiguration();
        
        $this->model->setOperationalConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOperationalConfiguration());
    }

    /**
     * Test attribute "in_store_pickup_configuration"
     */
    public function testPropertyInStorePickupConfiguration()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplysources\InStorePickupConfiguration();
        
        $this->model->setInStorePickupConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getInStorePickupConfiguration());
    }

    /**
     * Test attribute "curbside_pickup_configuration"
     */
    public function testPropertyCurbsidePickupConfiguration()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplysources\CurbsidePickupConfiguration();
        
        $this->model->setCurbsidePickupConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getCurbsidePickupConfiguration());
    }
}
