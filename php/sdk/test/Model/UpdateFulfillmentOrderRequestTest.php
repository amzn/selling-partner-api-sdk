<?php
/**
 * UpdateFulfillmentOrderRequestTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\UpdateFulfillmentOrderRequest;

/**
 * UpdateFulfillmentOrderRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;updateFulfillmentOrder&#x60; operation.
 * @package     SpApi
 */
class UpdateFulfillmentOrderRequestTest extends TestCase
{

    private UpdateFulfillmentOrderRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateFulfillmentOrderRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateFulfillmentOrderRequest"
     */
    public function testUpdateFulfillmentOrderRequest()
    {
        $this->assertInstanceOf(UpdateFulfillmentOrderRequest::class, $this->model);
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
     * Test attribute "displayable_order_id"
     */
    public function testPropertyDisplayableOrderId()
    {
        $testValue = 'test';
        
        $this->model->setDisplayableOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayableOrderId());
    }

    /**
     * Test attribute "displayable_order_date"
     */
    public function testPropertyDisplayableOrderDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDisplayableOrderDate($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayableOrderDate());
    }

    /**
     * Test attribute "displayable_order_comment"
     */
    public function testPropertyDisplayableOrderComment()
    {
        $testValue = 'test';
        
        $this->model->setDisplayableOrderComment($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayableOrderComment());
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
     * Test attribute "destination_address"
     */
    public function testPropertyDestinationAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Address();
        
        $this->model->setDestinationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAddress());
    }

    /**
     * Test attribute "fulfillment_action"
     */
    public function testPropertyFulfillmentAction()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentAction();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentAction($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentAction());
    }

    /**
     * Test attribute "fulfillment_policy"
     */
    public function testPropertyFulfillmentPolicy()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentPolicy();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentPolicy($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentPolicy());
    }

    /**
     * Test attribute "ship_from_country_code"
     */
    public function testPropertyShipFromCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setShipFromCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromCountryCode());
    }

    /**
     * Test attribute "notification_emails"
     */
    public function testPropertyNotificationEmails()
    {
        $testValue = [];
        
        $this->model->setNotificationEmails($testValue);
        $this->assertEquals($testValue, $this->model->getNotificationEmails());
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

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
