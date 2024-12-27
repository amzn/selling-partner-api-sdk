<?php
/**
 * ContainerTest
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
use OpenAPI\Client\Model\vendor.df.shipping\Container;

/**
 * ContainerTest Class Doc Comment
 *
 * @category    Class
 * @description A container used for shipping and packing items.
 * @package     OpenAPI\Client
 */
class ContainerTest extends TestCase
{

    private Container $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Container();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Container"
     */
    public function testContainer()
    {
        $this->assertInstanceOf(Container::class, $this->model);
    }

    /**
     * Test attribute "container_type"
     */
    public function testPropertyContainerType()
    {
        $enumInstance = new Container();
        $allowedValues = $enumInstance->getContainerTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setContainerType($testValue);
        $this->assertEquals($testValue, $this->model->getContainerType());
    }

    /**
     * Test attribute "container_identifier"
     */
    public function testPropertyContainerIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setContainerIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getContainerIdentifier());
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
     * Test attribute "manifest_id"
     */
    public function testPropertyManifestId()
    {
        $testValue = 'test';
        
        $this->model->setManifestId($testValue);
        $this->assertEquals($testValue, $this->model->getManifestId());
    }

    /**
     * Test attribute "manifest_date"
     */
    public function testPropertyManifestDate()
    {
        $testValue = 'test';
        
        $this->model->setManifestDate($testValue);
        $this->assertEquals($testValue, $this->model->getManifestDate());
    }

    /**
     * Test attribute "ship_method"
     */
    public function testPropertyShipMethod()
    {
        $testValue = 'test';
        
        $this->model->setShipMethod($testValue);
        $this->assertEquals($testValue, $this->model->getShipMethod());
    }

    /**
     * Test attribute "scac_code"
     */
    public function testPropertyScacCode()
    {
        $testValue = 'test';
        
        $this->model->setScacCode($testValue);
        $this->assertEquals($testValue, $this->model->getScacCode());
    }

    /**
     * Test attribute "carrier"
     */
    public function testPropertyCarrier()
    {
        $testValue = 'test';
        
        $this->model->setCarrier($testValue);
        $this->assertEquals($testValue, $this->model->getCarrier());
    }

    /**
     * Test attribute "container_sequence_number"
     */
    public function testPropertyContainerSequenceNumber()
    {
        $testValue = 123;
        
        $this->model->setContainerSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getContainerSequenceNumber());
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor.df.shipping\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }

    /**
     * Test attribute "packed_items"
     */
    public function testPropertyPackedItems()
    {
        $testValue = [];
        
        $this->model->setPackedItems($testValue);
        $this->assertEquals($testValue, $this->model->getPackedItems());
    }
}
