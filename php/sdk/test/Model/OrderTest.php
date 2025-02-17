<?php
/**
 * OrderTest
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
use SpApi\Model\orders\v0\Order;

/**
 * OrderTest Class Doc Comment
 *
 * @category    Class
 * @description Order information.
 * @package     SpApi
 */
class OrderTest extends TestCase
{

    private Order $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Order();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Order"
     */
    public function testOrder()
    {
        $this->assertInstanceOf(Order::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "seller_order_id"
     */
    public function testPropertySellerOrderId()
    {
        $testValue = 'test';
        
        $this->model->setSellerOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerOrderId());
    }

    /**
     * Test attribute "purchase_date"
     */
    public function testPropertyPurchaseDate()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseDate($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseDate());
    }

    /**
     * Test attribute "last_update_date"
     */
    public function testPropertyLastUpdateDate()
    {
        $testValue = 'test';
        
        $this->model->setLastUpdateDate($testValue);
        $this->assertEquals($testValue, $this->model->getLastUpdateDate());
    }

    /**
     * Test attribute "order_status"
     */
    public function testPropertyOrderStatus()
    {
        $enumInstance = new Order();
        $allowedValues = $enumInstance->getOrderStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setOrderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getOrderStatus());
    }

    /**
     * Test attribute "fulfillment_channel"
     */
    public function testPropertyFulfillmentChannel()
    {
        $enumInstance = new Order();
        $allowedValues = $enumInstance->getFulfillmentChannelAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setFulfillmentChannel($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentChannel());
    }

    /**
     * Test attribute "sales_channel"
     */
    public function testPropertySalesChannel()
    {
        $testValue = 'test';
        
        $this->model->setSalesChannel($testValue);
        $this->assertEquals($testValue, $this->model->getSalesChannel());
    }

    /**
     * Test attribute "order_channel"
     */
    public function testPropertyOrderChannel()
    {
        $testValue = 'test';
        
        $this->model->setOrderChannel($testValue);
        $this->assertEquals($testValue, $this->model->getOrderChannel());
    }

    /**
     * Test attribute "ship_service_level"
     */
    public function testPropertyShipServiceLevel()
    {
        $testValue = 'test';
        
        $this->model->setShipServiceLevel($testValue);
        $this->assertEquals($testValue, $this->model->getShipServiceLevel());
    }

    /**
     * Test attribute "order_total"
     */
    public function testPropertyOrderTotal()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setOrderTotal($testValue);
        $this->assertEquals($testValue, $this->model->getOrderTotal());
    }

    /**
     * Test attribute "number_of_items_shipped"
     */
    public function testPropertyNumberOfItemsShipped()
    {
        $testValue = 123;
        
        $this->model->setNumberOfItemsShipped($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfItemsShipped());
    }

    /**
     * Test attribute "number_of_items_unshipped"
     */
    public function testPropertyNumberOfItemsUnshipped()
    {
        $testValue = 123;
        
        $this->model->setNumberOfItemsUnshipped($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfItemsUnshipped());
    }

    /**
     * Test attribute "payment_execution_detail"
     */
    public function testPropertyPaymentExecutionDetail()
    {
        $testValue = [];
        
        $this->model->setPaymentExecutionDetail($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentExecutionDetail());
    }

    /**
     * Test attribute "payment_method"
     */
    public function testPropertyPaymentMethod()
    {
        $enumInstance = new Order();
        $allowedValues = $enumInstance->getPaymentMethodAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setPaymentMethod($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethod());
    }

    /**
     * Test attribute "payment_method_details"
     */
    public function testPropertyPaymentMethodDetails()
    {
        $testValue = [];
        
        $this->model->setPaymentMethodDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethodDetails());
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
     * Test attribute "shipment_service_level_category"
     */
    public function testPropertyShipmentServiceLevelCategory()
    {
        $testValue = 'test';
        
        $this->model->setShipmentServiceLevelCategory($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentServiceLevelCategory());
    }

    /**
     * Test attribute "easy_ship_shipment_status"
     */
    public function testPropertyEasyShipShipmentStatus()
    {
        $enumInstance = new \SpApi\Model\orders\v0\EasyShipShipmentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setEasyShipShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getEasyShipShipmentStatus());
    }

    /**
     * Test attribute "cba_displayable_shipping_label"
     */
    public function testPropertyCbaDisplayableShippingLabel()
    {
        $testValue = 'test';
        
        $this->model->setCbaDisplayableShippingLabel($testValue);
        $this->assertEquals($testValue, $this->model->getCbaDisplayableShippingLabel());
    }

    /**
     * Test attribute "order_type"
     */
    public function testPropertyOrderType()
    {
        $enumInstance = new Order();
        $allowedValues = $enumInstance->getOrderTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setOrderType($testValue);
        $this->assertEquals($testValue, $this->model->getOrderType());
    }

    /**
     * Test attribute "earliest_ship_date"
     */
    public function testPropertyEarliestShipDate()
    {
        $testValue = 'test';
        
        $this->model->setEarliestShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getEarliestShipDate());
    }

    /**
     * Test attribute "latest_ship_date"
     */
    public function testPropertyLatestShipDate()
    {
        $testValue = 'test';
        
        $this->model->setLatestShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getLatestShipDate());
    }

    /**
     * Test attribute "earliest_delivery_date"
     */
    public function testPropertyEarliestDeliveryDate()
    {
        $testValue = 'test';
        
        $this->model->setEarliestDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getEarliestDeliveryDate());
    }

    /**
     * Test attribute "latest_delivery_date"
     */
    public function testPropertyLatestDeliveryDate()
    {
        $testValue = 'test';
        
        $this->model->setLatestDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getLatestDeliveryDate());
    }

    /**
     * Test attribute "is_business_order"
     */
    public function testPropertyIsBusinessOrder()
    {
        $testValue = true;
        
        $this->model->setIsBusinessOrder($testValue);
        $this->assertEquals($testValue, $this->model->getIsBusinessOrder());
    }

    /**
     * Test attribute "is_prime"
     */
    public function testPropertyIsPrime()
    {
        $testValue = true;
        
        $this->model->setIsPrime($testValue);
        $this->assertEquals($testValue, $this->model->getIsPrime());
    }

    /**
     * Test attribute "is_premium_order"
     */
    public function testPropertyIsPremiumOrder()
    {
        $testValue = true;
        
        $this->model->setIsPremiumOrder($testValue);
        $this->assertEquals($testValue, $this->model->getIsPremiumOrder());
    }

    /**
     * Test attribute "is_global_express_enabled"
     */
    public function testPropertyIsGlobalExpressEnabled()
    {
        $testValue = true;
        
        $this->model->setIsGlobalExpressEnabled($testValue);
        $this->assertEquals($testValue, $this->model->getIsGlobalExpressEnabled());
    }

    /**
     * Test attribute "replaced_order_id"
     */
    public function testPropertyReplacedOrderId()
    {
        $testValue = 'test';
        
        $this->model->setReplacedOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getReplacedOrderId());
    }

    /**
     * Test attribute "is_replacement_order"
     */
    public function testPropertyIsReplacementOrder()
    {
        $testValue = true;
        
        $this->model->setIsReplacementOrder($testValue);
        $this->assertEquals($testValue, $this->model->getIsReplacementOrder());
    }

    /**
     * Test attribute "promise_response_due_date"
     */
    public function testPropertyPromiseResponseDueDate()
    {
        $testValue = 'test';
        
        $this->model->setPromiseResponseDueDate($testValue);
        $this->assertEquals($testValue, $this->model->getPromiseResponseDueDate());
    }

    /**
     * Test attribute "is_estimated_ship_date_set"
     */
    public function testPropertyIsEstimatedShipDateSet()
    {
        $testValue = true;
        
        $this->model->setIsEstimatedShipDateSet($testValue);
        $this->assertEquals($testValue, $this->model->getIsEstimatedShipDateSet());
    }

    /**
     * Test attribute "is_sold_by_ab"
     */
    public function testPropertyIsSoldByAb()
    {
        $testValue = true;
        
        $this->model->setIsSoldByAb($testValue);
        $this->assertEquals($testValue, $this->model->getIsSoldByAb());
    }

    /**
     * Test attribute "is_iba"
     */
    public function testPropertyIsIba()
    {
        $testValue = true;
        
        $this->model->setIsIba($testValue);
        $this->assertEquals($testValue, $this->model->getIsIba());
    }

    /**
     * Test attribute "default_ship_from_location_address"
     */
    public function testPropertyDefaultShipFromLocationAddress()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Address();
        
        $this->model->setDefaultShipFromLocationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDefaultShipFromLocationAddress());
    }

    /**
     * Test attribute "buyer_invoice_preference"
     */
    public function testPropertyBuyerInvoicePreference()
    {
        $enumInstance = new Order();
        $allowedValues = $enumInstance->getBuyerInvoicePreferenceAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setBuyerInvoicePreference($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerInvoicePreference());
    }

    /**
     * Test attribute "buyer_tax_information"
     */
    public function testPropertyBuyerTaxInformation()
    {
        
        $testValue = new \SpApi\Model\orders\v0\BuyerTaxInformation();
        
        $this->model->setBuyerTaxInformation($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerTaxInformation());
    }

    /**
     * Test attribute "fulfillment_instruction"
     */
    public function testPropertyFulfillmentInstruction()
    {
        
        $testValue = new \SpApi\Model\orders\v0\FulfillmentInstruction();
        
        $this->model->setFulfillmentInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentInstruction());
    }

    /**
     * Test attribute "is_ispu"
     */
    public function testPropertyIsIspu()
    {
        $testValue = true;
        
        $this->model->setIsIspu($testValue);
        $this->assertEquals($testValue, $this->model->getIsIspu());
    }

    /**
     * Test attribute "is_access_point_order"
     */
    public function testPropertyIsAccessPointOrder()
    {
        $testValue = true;
        
        $this->model->setIsAccessPointOrder($testValue);
        $this->assertEquals($testValue, $this->model->getIsAccessPointOrder());
    }

    /**
     * Test attribute "marketplace_tax_info"
     */
    public function testPropertyMarketplaceTaxInfo()
    {
        
        $testValue = new \SpApi\Model\orders\v0\MarketplaceTaxInfo();
        
        $this->model->setMarketplaceTaxInfo($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceTaxInfo());
    }

    /**
     * Test attribute "seller_display_name"
     */
    public function testPropertySellerDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setSellerDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getSellerDisplayName());
    }

    /**
     * Test attribute "shipping_address"
     */
    public function testPropertyShippingAddress()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Address();
        
        $this->model->setShippingAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShippingAddress());
    }

    /**
     * Test attribute "buyer_info"
     */
    public function testPropertyBuyerInfo()
    {
        
        $testValue = new \SpApi\Model\orders\v0\BuyerInfo();
        
        $this->model->setBuyerInfo($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerInfo());
    }

    /**
     * Test attribute "automated_shipping_settings"
     */
    public function testPropertyAutomatedShippingSettings()
    {
        
        $testValue = new \SpApi\Model\orders\v0\AutomatedShippingSettings();
        
        $this->model->setAutomatedShippingSettings($testValue);
        $this->assertEquals($testValue, $this->model->getAutomatedShippingSettings());
    }

    /**
     * Test attribute "has_regulated_items"
     */
    public function testPropertyHasRegulatedItems()
    {
        $testValue = true;
        
        $this->model->setHasRegulatedItems($testValue);
        $this->assertEquals($testValue, $this->model->getHasRegulatedItems());
    }

    /**
     * Test attribute "electronic_invoice_status"
     */
    public function testPropertyElectronicInvoiceStatus()
    {
        $enumInstance = new \SpApi\Model\orders\v0\ElectronicInvoiceStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setElectronicInvoiceStatus($testValue);
        $this->assertEquals($testValue, $this->model->getElectronicInvoiceStatus());
    }
}
