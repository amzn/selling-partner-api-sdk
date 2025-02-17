<?php
/**
 * AutomatedShippingSettingsTest
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
use SpApi\Model\orders\v0\AutomatedShippingSettings;

/**
 * AutomatedShippingSettingsTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information regarding the Shipping Settings Automation program, such as whether the order&#39;s shipping settings were generated automatically, and what those settings are.
 * @package     SpApi
 */
class AutomatedShippingSettingsTest extends TestCase
{

    private AutomatedShippingSettings $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AutomatedShippingSettings();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AutomatedShippingSettings"
     */
    public function testAutomatedShippingSettings()
    {
        $this->assertInstanceOf(AutomatedShippingSettings::class, $this->model);
    }

    /**
     * Test attribute "has_automated_shipping_settings"
     */
    public function testPropertyHasAutomatedShippingSettings()
    {
        $testValue = true;
        
        $this->model->setHasAutomatedShippingSettings($testValue);
        $this->assertEquals($testValue, $this->model->getHasAutomatedShippingSettings());
    }

    /**
     * Test attribute "automated_carrier"
     */
    public function testPropertyAutomatedCarrier()
    {
        $testValue = 'test';
        
        $this->model->setAutomatedCarrier($testValue);
        $this->assertEquals($testValue, $this->model->getAutomatedCarrier());
    }

    /**
     * Test attribute "automated_ship_method"
     */
    public function testPropertyAutomatedShipMethod()
    {
        $testValue = 'test';
        
        $this->model->setAutomatedShipMethod($testValue);
        $this->assertEquals($testValue, $this->model->getAutomatedShipMethod());
    }
}
