<?php
/**
 * VolumeTest
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
use OpenAPI\Client\Model\vendor\shipments\v1\Volume;

/**
 * VolumeTest Class Doc Comment
 *
 * @category    Class
 * @description The volume of the shipment.
 * @package     OpenAPI\Client
 */
class VolumeTest extends TestCase
{

    private Volume $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Volume();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Volume"
     */
    public function testVolume()
    {
        $this->assertInstanceOf(Volume::class, $this->model);
    }

    /**
     * Test attribute "unit_of_measure"
     */
    public function testPropertyUnitOfMeasure()
    {
        $enumInstance = new Volume();
        $allowedValues = $enumInstance->getUnitOfMeasureAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setUnitOfMeasure($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasure());
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
