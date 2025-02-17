<?php
/**
 * GetFulfillmentPreviewRequestTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentPreviewRequest;

/**
 * GetFulfillmentPreviewRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;getFulfillmentPreview&#x60; operation.
 * @package     SpApi
 */
class GetFulfillmentPreviewRequestTest extends TestCase
{

    private GetFulfillmentPreviewRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFulfillmentPreviewRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFulfillmentPreviewRequest"
     */
    public function testGetFulfillmentPreviewRequest()
    {
        $this->assertInstanceOf(GetFulfillmentPreviewRequest::class, $this->model);
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
     * Test attribute "address"
     */
    public function testPropertyAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Address();
        
        $this->model->setAddress($testValue);
        $this->assertEquals($testValue, $this->model->getAddress());
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
     * Test attribute "shipping_speed_categories"
     */
    public function testPropertyShippingSpeedCategories()
    {
        $testValue = [];
        
        $this->model->setShippingSpeedCategories($testValue);
        $this->assertEquals($testValue, $this->model->getShippingSpeedCategories());
    }

    /**
     * Test attribute "include_cod_fulfillment_preview"
     */
    public function testPropertyIncludeCodFulfillmentPreview()
    {
        $testValue = true;
        
        $this->model->setIncludeCodFulfillmentPreview($testValue);
        $this->assertEquals($testValue, $this->model->getIncludeCodFulfillmentPreview());
    }

    /**
     * Test attribute "include_delivery_windows"
     */
    public function testPropertyIncludeDeliveryWindows()
    {
        $testValue = true;
        
        $this->model->setIncludeDeliveryWindows($testValue);
        $this->assertEquals($testValue, $this->model->getIncludeDeliveryWindows());
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
