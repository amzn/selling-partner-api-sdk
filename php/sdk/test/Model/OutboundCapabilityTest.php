<?php
/**
 * OutboundCapabilityTest
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
use SpApi\Model\supplySources\v2020_07_01\OutboundCapability;

/**
 * OutboundCapabilityTest Class Doc Comment
 *
 * @category    Class
 * @description The outbound capability of a supply source.
 * @package     SpApi
 */
class OutboundCapabilityTest extends TestCase
{

    private OutboundCapability $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OutboundCapability();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OutboundCapability"
     */
    public function testOutboundCapability()
    {
        $this->assertInstanceOf(OutboundCapability::class, $this->model);
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
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\OperationalConfiguration();
        
        $this->model->setOperationalConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOperationalConfiguration());
    }

    /**
     * Test attribute "return_location"
     */
    public function testPropertyReturnLocation()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\ReturnLocation();
        
        $this->model->setReturnLocation($testValue);
        $this->assertEquals($testValue, $this->model->getReturnLocation());
    }

    /**
     * Test attribute "delivery_channel"
     */
    public function testPropertyDeliveryChannel()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\DeliveryChannel();
        
        $this->model->setDeliveryChannel($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryChannel());
    }

    /**
     * Test attribute "pickup_channel"
     */
    public function testPropertyPickupChannel()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\PickupChannel();
        
        $this->model->setPickupChannel($testValue);
        $this->assertEquals($testValue, $this->model->getPickupChannel());
    }
}
