<?php
/**
 * InStorePickupConfigurationTest
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
use OpenAPI\Client\Model\supplySources\InStorePickupConfiguration;

/**
 * InStorePickupConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The in-store pickup configuration of a supply source.
 * @package     OpenAPI\Client
 */
class InStorePickupConfigurationTest extends TestCase
{

    private InStorePickupConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InStorePickupConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InStorePickupConfiguration"
     */
    public function testInStorePickupConfiguration()
    {
        $this->assertInstanceOf(InStorePickupConfiguration::class, $this->model);
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
     * Test attribute "parking_configuration"
     */
    public function testPropertyParkingConfiguration()
    {
        
        $testValue = new \OpenAPI\Client\Model\supplySources\ParkingConfiguration();
        
        $this->model->setParkingConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getParkingConfiguration());
    }
}
