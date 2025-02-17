<?php
/**
 * ShippingOfferingFilterTest
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
use SpApi\Model\merchantFulfillment\v0\ShippingOfferingFilter;

/**
 * ShippingOfferingFilterTest Class Doc Comment
 *
 * @category    Class
 * @description Filter for use when requesting eligible shipping services.
 * @package     SpApi
 */
class ShippingOfferingFilterTest extends TestCase
{

    private ShippingOfferingFilter $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingOfferingFilter();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingOfferingFilter"
     */
    public function testShippingOfferingFilter()
    {
        $this->assertInstanceOf(ShippingOfferingFilter::class, $this->model);
    }

    /**
     * Test attribute "include_packing_slip_with_label"
     */
    public function testPropertyIncludePackingSlipWithLabel()
    {
        $testValue = true;
        
        $this->model->setIncludePackingSlipWithLabel($testValue);
        $this->assertEquals($testValue, $this->model->getIncludePackingSlipWithLabel());
    }

    /**
     * Test attribute "include_complex_shipping_options"
     */
    public function testPropertyIncludeComplexShippingOptions()
    {
        $testValue = true;
        
        $this->model->setIncludeComplexShippingOptions($testValue);
        $this->assertEquals($testValue, $this->model->getIncludeComplexShippingOptions());
    }

    /**
     * Test attribute "carrier_will_pick_up"
     */
    public function testPropertyCarrierWillPickUp()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\CarrierWillPickUpOption();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCarrierWillPickUp($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierWillPickUp());
    }

    /**
     * Test attribute "delivery_experience"
     */
    public function testPropertyDeliveryExperience()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\DeliveryExperienceOption();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setDeliveryExperience($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryExperience());
    }
}
