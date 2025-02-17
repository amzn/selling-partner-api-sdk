<?php
/**
 * ShippingServiceTest
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
use SpApi\Model\merchantFulfillment\v0\ShippingService;

/**
 * ShippingServiceTest Class Doc Comment
 *
 * @category    Class
 * @description A shipping service offer made by a carrier.
 * @package     SpApi
 */
class ShippingServiceTest extends TestCase
{

    private ShippingService $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingService();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingService"
     */
    public function testShippingService()
    {
        $this->assertInstanceOf(ShippingService::class, $this->model);
    }

    /**
     * Test attribute "shipping_service_name"
     */
    public function testPropertyShippingServiceName()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceName($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceName());
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }

    /**
     * Test attribute "shipping_service_id"
     */
    public function testPropertyShippingServiceId()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceId());
    }

    /**
     * Test attribute "shipping_service_offer_id"
     */
    public function testPropertyShippingServiceOfferId()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceOfferId($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceOfferId());
    }

    /**
     * Test attribute "ship_date"
     */
    public function testPropertyShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getShipDate());
    }

    /**
     * Test attribute "earliest_estimated_delivery_date"
     */
    public function testPropertyEarliestEstimatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEarliestEstimatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getEarliestEstimatedDeliveryDate());
    }

    /**
     * Test attribute "latest_estimated_delivery_date"
     */
    public function testPropertyLatestEstimatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLatestEstimatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getLatestEstimatedDeliveryDate());
    }

    /**
     * Test attribute "rate"
     */
    public function testPropertyRate()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\CurrencyAmount();
        
        $this->model->setRate($testValue);
        $this->assertEquals($testValue, $this->model->getRate());
    }

    /**
     * Test attribute "shipping_service_options"
     */
    public function testPropertyShippingServiceOptions()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\ShippingServiceOptions();
        
        $this->model->setShippingServiceOptions($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceOptions());
    }

    /**
     * Test attribute "available_shipping_service_options"
     */
    public function testPropertyAvailableShippingServiceOptions()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\AvailableShippingServiceOptions();
        
        $this->model->setAvailableShippingServiceOptions($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableShippingServiceOptions());
    }

    /**
     * Test attribute "available_label_formats"
     */
    public function testPropertyAvailableLabelFormats()
    {
        $testValue = [];
        
        $this->model->setAvailableLabelFormats($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableLabelFormats());
    }

    /**
     * Test attribute "available_format_options_for_label"
     */
    public function testPropertyAvailableFormatOptionsForLabel()
    {
        $testValue = [];
        
        $this->model->setAvailableFormatOptionsForLabel($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableFormatOptionsForLabel());
    }

    /**
     * Test attribute "requires_additional_seller_inputs"
     */
    public function testPropertyRequiresAdditionalSellerInputs()
    {
        $testValue = true;
        
        $this->model->setRequiresAdditionalSellerInputs($testValue);
        $this->assertEquals($testValue, $this->model->getRequiresAdditionalSellerInputs());
    }

    /**
     * Test attribute "benefits"
     */
    public function testPropertyBenefits()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\Benefits();
        
        $this->model->setBenefits($testValue);
        $this->assertEquals($testValue, $this->model->getBenefits());
    }
}
