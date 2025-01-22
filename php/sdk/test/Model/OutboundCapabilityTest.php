<?php
/**
 * OutboundCapabilityTest
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
use OpenAPI\Client\Model\supplySources\OutboundCapability;

/**
 * OutboundCapabilityTest Class Doc Comment
 *
 * @category    Class
 * @description The outbound capability of a supply source.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\supplySources\OperationalConfiguration();
        
        $this->model->setOperationalConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getOperationalConfiguration());
    }

    /**
     * Test attribute "return_location"
     */
    public function testPropertyReturnLocation()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\ReturnLocation();
        
        $this->model->setReturnLocation($testValue);
        $this->assertEquals($testValue, $this->model->getReturnLocation());
    }

    /**
     * Test attribute "delivery_channel"
     */
    public function testPropertyDeliveryChannel()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\DeliveryChannel();
        
        $this->model->setDeliveryChannel($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryChannel());
    }

    /**
     * Test attribute "pickup_channel"
     */
    public function testPropertyPickupChannel()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\PickupChannel();
        
        $this->model->setPickupChannel($testValue);
        $this->assertEquals($testValue, $this->model->getPickupChannel());
    }
}
