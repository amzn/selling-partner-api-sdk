<?php
/**
 * FulfillmentOrderTest
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
use OpenAPI\Client\Model\fulfillment\outbound\FulfillmentOrder;

/**
 * FulfillmentOrderTest Class Doc Comment
 *
 * @category    Class
 * @description General information about a fulfillment order, including its status.
 * @package     OpenAPI\Client
 */
class FulfillmentOrderTest extends TestCase
{

    private FulfillmentOrder $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentOrder();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentOrder"
     */
    public function testFulfillmentOrder()
    {
        $this->assertInstanceOf(FulfillmentOrder::class, $this->model);
    }

    /**
     * Test attribute "seller_fulfillment_order_id"
     */
    public function testPropertySellerFulfillmentOrderId()
    {
        $testValue = 'test';
        
        $this->model->setSellerFulfillmentOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerFulfillmentOrderId());
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\outbound\ShippingSpeedCategory();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShippingSpeedCategory($testValue);
        $this->assertEquals($testValue, $this->model->getShippingSpeedCategory());
    }

    /**
     * Test attribute "delivery_window"
     */
    public function testPropertyDeliveryWindow()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow();
        
        $this->model->setDeliveryWindow($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindow());
    }

    /**
     * Test attribute "destination_address"
     */
    public function testPropertyDestinationAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\Address();
        
        $this->model->setDestinationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAddress());
    }

    /**
     * Test attribute "fulfillment_action"
     */
    public function testPropertyFulfillmentAction()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\outbound\FulfillmentAction();
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\outbound\FulfillmentPolicy();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentPolicy($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentPolicy());
    }

    /**
     * Test attribute "cod_settings"
     */
    public function testPropertyCodSettings()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\CODSettings();
        
        $this->model->setCodSettings($testValue);
        $this->assertEquals($testValue, $this->model->getCodSettings());
    }

    /**
     * Test attribute "received_date"
     */
    public function testPropertyReceivedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setReceivedDate($testValue);
        $this->assertEquals($testValue, $this->model->getReceivedDate());
    }

    /**
     * Test attribute "fulfillment_order_status"
     */
    public function testPropertyFulfillmentOrderStatus()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\outbound\FulfillmentOrderStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentOrderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentOrderStatus());
    }

    /**
     * Test attribute "status_updated_date"
     */
    public function testPropertyStatusUpdatedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStatusUpdatedDate($testValue);
        $this->assertEquals($testValue, $this->model->getStatusUpdatedDate());
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
}
