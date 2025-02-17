<?php
/**
 * AvailableShippingServiceOptionsTest
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
use SpApi\Model\merchantFulfillment\v0\AvailableShippingServiceOptions;

/**
 * AvailableShippingServiceOptionsTest Class Doc Comment
 *
 * @category    Class
 * @description The available shipping service options.
 * @package     SpApi
 */
class AvailableShippingServiceOptionsTest extends TestCase
{

    private AvailableShippingServiceOptions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AvailableShippingServiceOptions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AvailableShippingServiceOptions"
     */
    public function testAvailableShippingServiceOptions()
    {
        $this->assertInstanceOf(AvailableShippingServiceOptions::class, $this->model);
    }

    /**
     * Test attribute "available_carrier_will_pick_up_options"
     */
    public function testPropertyAvailableCarrierWillPickUpOptions()
    {
        $testValue = [];
        
        $this->model->setAvailableCarrierWillPickUpOptions($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableCarrierWillPickUpOptions());
    }

    /**
     * Test attribute "available_delivery_experience_options"
     */
    public function testPropertyAvailableDeliveryExperienceOptions()
    {
        $testValue = [];
        
        $this->model->setAvailableDeliveryExperienceOptions($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableDeliveryExperienceOptions());
    }
}
