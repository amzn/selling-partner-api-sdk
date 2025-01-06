<?php
/**
 * BoxUpdateInputTest
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
use OpenAPI\Client\Model\fulfillmentInbound\BoxUpdateInput;

/**
 * BoxUpdateInputTest Class Doc Comment
 *
 * @category    Class
 * @description Input information for updating a box
 * @package     OpenAPI\Client
 */
class BoxUpdateInputTest extends TestCase
{

    private BoxUpdateInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BoxUpdateInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BoxUpdateInput"
     */
    public function testBoxUpdateInput()
    {
        $this->assertInstanceOf(BoxUpdateInput::class, $this->model);
    }

    /**
     * Test attribute "content_information_source"
     */
    public function testPropertyContentInformationSource()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentInbound\BoxContentInformationSource();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setContentInformationSource($testValue);
        $this->assertEquals($testValue, $this->model->getContentInformationSource());
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Dimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
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
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }
}
