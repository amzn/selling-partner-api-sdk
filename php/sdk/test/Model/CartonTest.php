<?php
/**
 * CartonTest
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
use SpApi\Model\vendor\shipments\v1\Carton;

/**
 * CartonTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the carton/package being shipped.
 * @package     SpApi
 */
class CartonTest extends TestCase
{

    private Carton $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Carton();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Carton"
     */
    public function testCarton()
    {
        $this->assertInstanceOf(Carton::class, $this->model);
    }

    /**
     * Test attribute "carton_identifiers"
     */
    public function testPropertyCartonIdentifiers()
    {
        $testValue = [];
        
        $this->model->setCartonIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getCartonIdentifiers());
    }

    /**
     * Test attribute "carton_sequence_number"
     */
    public function testPropertyCartonSequenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setCartonSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCartonSequenceNumber());
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }

    /**
     * Test attribute "tracking_number"
     */
    public function testPropertyTrackingNumber()
    {
        $testValue = 'test';
        
        $this->model->setTrackingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingNumber());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
