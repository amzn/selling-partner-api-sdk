<?php
/**
 * BoxTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\Box;

/**
 * BoxTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information about a box that is used in the inbound plan. The box is a container that holds multiple items.
 * @package     SpApi
 */
class BoxTest extends TestCase
{

    private Box $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Box();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Box"
     */
    public function testBox()
    {
        $this->assertInstanceOf(Box::class, $this->model);
    }

    /**
     * Test attribute "box_id"
     */
    public function testPropertyBoxId()
    {
        $testValue = 'test';
        
        $this->model->setBoxId($testValue);
        $this->assertEquals($testValue, $this->model->getBoxId());
    }

    /**
     * Test attribute "content_information_source"
     */
    public function testPropertyContentInformationSource()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\BoxContentInformationSource();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setContentInformationSource($testValue);
        $this->assertEquals($testValue, $this->model->getContentInformationSource());
    }

    /**
     * Test attribute "destination_region"
     */
    public function testPropertyDestinationRegion()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Region();
        
        $this->model->setDestinationRegion($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationRegion());
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "external_container_identifier"
     */
    public function testPropertyExternalContainerIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setExternalContainerIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getExternalContainerIdentifier());
    }

    /**
     * Test attribute "external_container_identifier_type"
     */
    public function testPropertyExternalContainerIdentifierType()
    {
        $testValue = 'test';
        
        $this->model->setExternalContainerIdentifierType($testValue);
        $this->assertEquals($testValue, $this->model->getExternalContainerIdentifierType());
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

    /**
     * Test attribute "package_id"
     */
    public function testPropertyPackageId()
    {
        $testValue = 'test';
        
        $this->model->setPackageId($testValue);
        $this->assertEquals($testValue, $this->model->getPackageId());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "template_name"
     */
    public function testPropertyTemplateName()
    {
        $testValue = 'test';
        
        $this->model->setTemplateName($testValue);
        $this->assertEquals($testValue, $this->model->getTemplateName());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }
}
