<?php
/**
 * VehicleTest
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
use SpApi\Model\vehicles\v2024_11_01\Vehicle;

/**
 * VehicleTest Class Doc Comment
 *
 * @category    Class
 * @description Combinations of attributes and unique identifier that represents a vehicle in vehicle list.
 * @package     SpApi
 */
class VehicleTest extends TestCase
{

    private Vehicle $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Vehicle();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Vehicle"
     */
    public function testVehicle()
    {
        $this->assertInstanceOf(Vehicle::class, $this->model);
    }

    /**
     * Test attribute "make"
     */
    public function testPropertyMake()
    {
        $testValue = 'test';
        
        $this->model->setMake($testValue);
        $this->assertEquals($testValue, $this->model->getMake());
    }

    /**
     * Test attribute "model"
     */
    public function testPropertyModel()
    {
        $testValue = 'test';
        
        $this->model->setModel($testValue);
        $this->assertEquals($testValue, $this->model->getModel());
    }

    /**
     * Test attribute "variant_name"
     */
    public function testPropertyVariantName()
    {
        $testValue = 'test';
        
        $this->model->setVariantName($testValue);
        $this->assertEquals($testValue, $this->model->getVariantName());
    }

    /**
     * Test attribute "body_style"
     */
    public function testPropertyBodyStyle()
    {
        $testValue = 'test';
        
        $this->model->setBodyStyle($testValue);
        $this->assertEquals($testValue, $this->model->getBodyStyle());
    }

    /**
     * Test attribute "drive_type"
     */
    public function testPropertyDriveType()
    {
        $testValue = 'test';
        
        $this->model->setDriveType($testValue);
        $this->assertEquals($testValue, $this->model->getDriveType());
    }

    /**
     * Test attribute "energy"
     */
    public function testPropertyEnergy()
    {
        $testValue = 'test';
        
        $this->model->setEnergy($testValue);
        $this->assertEquals($testValue, $this->model->getEnergy());
    }

    /**
     * Test attribute "engine_output"
     */
    public function testPropertyEngineOutput()
    {
        $testValue = [];
        
        $this->model->setEngineOutput($testValue);
        $this->assertEquals($testValue, $this->model->getEngineOutput());
    }

    /**
     * Test attribute "manufacturing_start_date"
     */
    public function testPropertyManufacturingStartDate()
    {
        
        $testValue = new \SpApi\Model\vehicles\v2024_11_01\MonthAndYear();
        
        $this->model->setManufacturingStartDate($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturingStartDate());
    }

    /**
     * Test attribute "manufacturing_stop_date"
     */
    public function testPropertyManufacturingStopDate()
    {
        
        $testValue = new \SpApi\Model\vehicles\v2024_11_01\MonthAndYear();
        
        $this->model->setManufacturingStopDate($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturingStopDate());
    }

    /**
     * Test attribute "last_processed_date"
     */
    public function testPropertyLastProcessedDate()
    {
        $testValue = 'test';
        
        $this->model->setLastProcessedDate($testValue);
        $this->assertEquals($testValue, $this->model->getLastProcessedDate());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\vehicles\v2024_11_01\VehicleStatusInCatalog();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "identifiers"
     */
    public function testPropertyIdentifiers()
    {
        $testValue = [];
        
        $this->model->setIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifiers());
    }
}
