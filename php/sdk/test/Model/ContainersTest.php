<?php
/**
 * ContainersTest
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
use SpApi\Model\vendor\shipments\v1\Containers;

/**
 * ContainersTest Class Doc Comment
 *
 * @category    Class
 * @description A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
 * @package     SpApi
 */
class ContainersTest extends TestCase
{

    private Containers $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Containers();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Containers"
     */
    public function testContainers()
    {
        $this->assertInstanceOf(Containers::class, $this->model);
    }

    /**
     * Test attribute "container_type"
     */
    public function testPropertyContainerType()
    {
        $enumInstance = new Containers();
        $allowedValues = $enumInstance->getContainerTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setContainerType($testValue);
        $this->assertEquals($testValue, $this->model->getContainerType());
    }

    /**
     * Test attribute "container_sequence_number"
     */
    public function testPropertyContainerSequenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setContainerSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getContainerSequenceNumber());
    }

    /**
     * Test attribute "container_identifiers"
     */
    public function testPropertyContainerIdentifiers()
    {
        $testValue = [];
        
        $this->model->setContainerIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getContainerIdentifiers());
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
     * Test attribute "tier"
     */
    public function testPropertyTier()
    {
        $testValue = 123;
        
        $this->model->setTier($testValue);
        $this->assertEquals($testValue, $this->model->getTier());
    }

    /**
     * Test attribute "block"
     */
    public function testPropertyBlock()
    {
        $testValue = 123;
        
        $this->model->setBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBlock());
    }

    /**
     * Test attribute "inner_containers_details"
     */
    public function testPropertyInnerContainersDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\InnerContainersDetails();
        
        $this->model->setInnerContainersDetails($testValue);
        $this->assertEquals($testValue, $this->model->getInnerContainersDetails());
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
