<?php
/**
 * ParkingConfigurationTest
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
use SpApi\Model\supplySources\v2020_07_01\ParkingConfiguration;

/**
 * ParkingConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description The parking configuration.
 * @package     SpApi
 */
class ParkingConfigurationTest extends TestCase
{

    private ParkingConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ParkingConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ParkingConfiguration"
     */
    public function testParkingConfiguration()
    {
        $this->assertInstanceOf(ParkingConfiguration::class, $this->model);
    }

    /**
     * Test attribute "parking_cost_type"
     */
    public function testPropertyParkingCostType()
    {
        $enumInstance = new \SpApi\Model\supplySources\v2020_07_01\ParkingCostType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setParkingCostType($testValue);
        $this->assertEquals($testValue, $this->model->getParkingCostType());
    }

    /**
     * Test attribute "parking_spot_identification_type"
     */
    public function testPropertyParkingSpotIdentificationType()
    {
        $enumInstance = new \SpApi\Model\supplySources\v2020_07_01\ParkingSpotIdentificationType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setParkingSpotIdentificationType($testValue);
        $this->assertEquals($testValue, $this->model->getParkingSpotIdentificationType());
    }

    /**
     * Test attribute "number_of_parking_spots"
     */
    public function testPropertyNumberOfParkingSpots()
    {
        $testValue = 123;
        
        $this->model->setNumberOfParkingSpots($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfParkingSpots());
    }
}
