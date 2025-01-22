<?php
/**
 * CarrierAccountAttributeTest
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
use OpenAPI\Client\Model\shipping\CarrierAccountAttribute;

/**
 * CarrierAccountAttributeTest Class Doc Comment
 *
 * @category    Class
 * @description Attribute Properties required by carrier
 * @package     OpenAPI\Client
 */
class CarrierAccountAttributeTest extends TestCase
{

    private CarrierAccountAttribute $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierAccountAttribute();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierAccountAttribute"
     */
    public function testCarrierAccountAttribute()
    {
        $this->assertInstanceOf(CarrierAccountAttribute::class, $this->model);
    }

    /**
     * Test attribute "attribute_name"
     */
    public function testPropertyAttributeName()
    {
        $testValue = 'test';
        
        $this->model->setAttributeName($testValue);
        $this->assertEquals($testValue, $this->model->getAttributeName());
    }

    /**
     * Test attribute "property_group"
     */
    public function testPropertyPropertyGroup()
    {
        $testValue = 'test';
        
        $this->model->setPropertyGroup($testValue);
        $this->assertEquals($testValue, $this->model->getPropertyGroup());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
