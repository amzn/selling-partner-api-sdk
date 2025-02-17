<?php
/**
 * ShippingServiceOptionsTest
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
use SpApi\Model\merchantFulfillment\v0\ShippingServiceOptions;

/**
 * ShippingServiceOptionsTest Class Doc Comment
 *
 * @category    Class
 * @description Extra services provided by a carrier.
 * @package     SpApi
 */
class ShippingServiceOptionsTest extends TestCase
{

    private ShippingServiceOptions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingServiceOptions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingServiceOptions"
     */
    public function testShippingServiceOptions()
    {
        $this->assertInstanceOf(ShippingServiceOptions::class, $this->model);
    }

    /**
     * Test attribute "delivery_experience"
     */
    public function testPropertyDeliveryExperience()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\DeliveryExperienceType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setDeliveryExperience($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryExperience());
    }

    /**
     * Test attribute "declared_value"
     */
    public function testPropertyDeclaredValue()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\CurrencyAmount();
        
        $this->model->setDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getDeclaredValue());
    }

    /**
     * Test attribute "carrier_will_pick_up"
     */
    public function testPropertyCarrierWillPickUp()
    {
        $testValue = true;
        
        $this->model->setCarrierWillPickUp($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierWillPickUp());
    }

    /**
     * Test attribute "carrier_will_pick_up_option"
     */
    public function testPropertyCarrierWillPickUpOption()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\CarrierWillPickUpOption();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCarrierWillPickUpOption($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierWillPickUpOption());
    }

    /**
     * Test attribute "label_format"
     */
    public function testPropertyLabelFormat()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\LabelFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelFormat($testValue);
        $this->assertEquals($testValue, $this->model->getLabelFormat());
    }
}
