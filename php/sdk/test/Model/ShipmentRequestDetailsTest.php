<?php
/**
 * ShipmentRequestDetailsTest
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
use SpApi\Model\merchantFulfillment\v0\ShipmentRequestDetails;

/**
 * ShipmentRequestDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment information required for requesting shipping service offers or for creating a shipment.
 * @package     SpApi
 */
class ShipmentRequestDetailsTest extends TestCase
{

    private ShipmentRequestDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentRequestDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentRequestDetails"
     */
    public function testShipmentRequestDetails()
    {
        $this->assertInstanceOf(ShipmentRequestDetails::class, $this->model);
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
     * Test attribute "item_list"
     */
    public function testPropertyItemList()
    {
        $testValue = [];
        
        $this->model->setItemList($testValue);
        $this->assertEquals($testValue, $this->model->getItemList());
    }

    /**
     * Test attribute "ship_from_address"
     */
    public function testPropertyShipFromAddress()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
    }

    /**
     * Test attribute "package_dimensions"
     */
    public function testPropertyPackageDimensions()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\PackageDimensions();
        
        $this->model->setPackageDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDimensions());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\Weight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }

    /**
     * Test attribute "must_arrive_by_date"
     */
    public function testPropertyMustArriveByDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setMustArriveByDate($testValue);
        $this->assertEquals($testValue, $this->model->getMustArriveByDate());
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
     * Test attribute "shipping_service_options"
     */
    public function testPropertyShippingServiceOptions()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\ShippingServiceOptions();
        
        $this->model->setShippingServiceOptions($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceOptions());
    }

    /**
     * Test attribute "label_customization"
     */
    public function testPropertyLabelCustomization()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\LabelCustomization();
        
        $this->model->setLabelCustomization($testValue);
        $this->assertEquals($testValue, $this->model->getLabelCustomization());
    }
}
