<?php
/**
 * LiquidVolumeTest
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
use OpenAPI\Client\Model\merchantFulfillment\LiquidVolume;

/**
 * LiquidVolumeTest Class Doc Comment
 *
 * @category    Class
 * @description Liquid volume.
 * @package     OpenAPI\Client
 */
class LiquidVolumeTest extends TestCase
{

    private LiquidVolume $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LiquidVolume();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LiquidVolume"
     */
    public function testLiquidVolume()
    {
        $this->assertInstanceOf(LiquidVolume::class, $this->model);
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new LiquidVolume();
        $allowedValues = $enumInstance->getUnitAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 1;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
