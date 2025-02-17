<?php
/**
 * CurbsidePickupConfigurationTest
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
use SpApi\Model\supplySources\v2020_07_01\CurbsidePickupConfiguration;

/**
 * CurbsidePickupConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The curbside pickup configuration of a supply source.
 * @package     SpApi
 */
class CurbsidePickupConfigurationTest extends TestCase
{

    private CurbsidePickupConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CurbsidePickupConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CurbsidePickupConfiguration"
     */
    public function testCurbsidePickupConfiguration()
    {
        $this->assertInstanceOf(CurbsidePickupConfiguration::class, $this->model);
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
     * Test attribute "parking_with_address_configuration"
     */
    public function testPropertyParkingWithAddressConfiguration()
    {
        
        $testValue = new \SpApi\Model\supplySources\v2020_07_01\ParkingWithAddressConfiguration();
        
        $this->model->setParkingWithAddressConfiguration($testValue);
        $this->assertEquals($testValue, $this->model->getParkingWithAddressConfiguration());
    }
}
