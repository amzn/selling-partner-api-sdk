<?php
/**
 * FulfillmentPreviewTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentPreview;

/**
 * FulfillmentPreviewTest Class Doc Comment
 *
 * @category    Class
 * @description Information about a fulfillment order preview, including delivery and fee information based on shipping method.
 * @package     SpApi
 */
class FulfillmentPreviewTest extends TestCase
{

    private FulfillmentPreview $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentPreview();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentPreview"
     */
    public function testFulfillmentPreview()
    {
        $this->assertInstanceOf(FulfillmentPreview::class, $this->model);
    }

    /**
     * Test attribute "shipping_speed_category"
     */
    public function testPropertyShippingSpeedCategory()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\ShippingSpeedCategory();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShippingSpeedCategory($testValue);
        $this->assertEquals($testValue, $this->model->getShippingSpeedCategory());
    }

    /**
     * Test attribute "scheduled_delivery_info"
     */
    public function testPropertyScheduledDeliveryInfo()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\ScheduledDeliveryInfo();
        
        $this->model->setScheduledDeliveryInfo($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledDeliveryInfo());
    }

    /**
     * Test attribute "is_fulfillable"
     */
    public function testPropertyIsFulfillable()
    {
        $testValue = true;
        
        $this->model->setIsFulfillable($testValue);
        $this->assertEquals($testValue, $this->model->getIsFulfillable());
    }

    /**
     * Test attribute "is_cod_capable"
     */
    public function testPropertyIsCodCapable()
    {
        $testValue = true;
        
        $this->model->setIsCodCapable($testValue);
        $this->assertEquals($testValue, $this->model->getIsCodCapable());
    }

    /**
     * Test attribute "estimated_shipping_weight"
     */
    public function testPropertyEstimatedShippingWeight()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Weight();
        
        $this->model->setEstimatedShippingWeight($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedShippingWeight());
    }

    /**
     * Test attribute "estimated_fees"
     */
    public function testPropertyEstimatedFees()
    {
        $testValue = [];
        
        $this->model->setEstimatedFees($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedFees());
    }

    /**
     * Test attribute "fulfillment_preview_shipments"
     */
    public function testPropertyFulfillmentPreviewShipments()
    {
        $testValue = [];
        
        $this->model->setFulfillmentPreviewShipments($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentPreviewShipments());
    }

    /**
     * Test attribute "unfulfillable_preview_items"
     */
    public function testPropertyUnfulfillablePreviewItems()
    {
        $testValue = [];
        
        $this->model->setUnfulfillablePreviewItems($testValue);
        $this->assertEquals($testValue, $this->model->getUnfulfillablePreviewItems());
    }

    /**
     * Test attribute "order_unfulfillable_reasons"
     */
    public function testPropertyOrderUnfulfillableReasons()
    {
        $testValue = [];
        
        $this->model->setOrderUnfulfillableReasons($testValue);
        $this->assertEquals($testValue, $this->model->getOrderUnfulfillableReasons());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "feature_constraints"
     */
    public function testPropertyFeatureConstraints()
    {
        $testValue = [];
        
        $this->model->setFeatureConstraints($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureConstraints());
    }
}
