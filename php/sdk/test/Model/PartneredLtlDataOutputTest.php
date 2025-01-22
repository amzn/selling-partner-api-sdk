<?php
/**
 * PartneredLtlDataOutputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredLtlDataOutput;

/**
 * PartneredLtlDataOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Information returned by Amazon about a Less Than Truckload/Full Truckload (LTL/FTL) shipment by an Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class PartneredLtlDataOutputTest extends TestCase
{

    private PartneredLtlDataOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredLtlDataOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredLtlDataOutput"
     */
    public function testPartneredLtlDataOutput()
    {
        $this->assertInstanceOf(PartneredLtlDataOutput::class, $this->model);
    }

    /**
     * Test attribute "contact"
     */
    public function testPropertyContact()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Contact();
        
        $this->model->setContact($testValue);
        $this->assertEquals($testValue, $this->model->getContact());
    }

    /**
     * Test attribute "box_count"
     */
    public function testPropertyBoxCount()
    {
        
        $testValue = new int();
        
        $this->model->setBoxCount($testValue);
        $this->assertEquals($testValue, $this->model->getBoxCount());
    }

    /**
     * Test attribute "seller_freight_class"
     */
    public function testPropertySellerFreightClass()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\SellerFreightClass();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setSellerFreightClass($testValue);
        $this->assertEquals($testValue, $this->model->getSellerFreightClass());
    }

    /**
     * Test attribute "freight_ready_date"
     */
    public function testPropertyFreightReadyDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setFreightReadyDate($testValue);
        $this->assertEquals($testValue, $this->model->getFreightReadyDate());
    }

    /**
     * Test attribute "pallet_list"
     */
    public function testPropertyPalletList()
    {
        $testValue = [];
        
        $this->model->setPalletList($testValue);
        $this->assertEquals($testValue, $this->model->getPalletList());
    }

    /**
     * Test attribute "total_weight"
     */
    public function testPropertyTotalWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Weight();
        
        $this->model->setTotalWeight($testValue);
        $this->assertEquals($testValue, $this->model->getTotalWeight());
    }

    /**
     * Test attribute "seller_declared_value"
     */
    public function testPropertySellerDeclaredValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Amount();
        
        $this->model->setSellerDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getSellerDeclaredValue());
    }

    /**
     * Test attribute "amazon_calculated_value"
     */
    public function testPropertyAmazonCalculatedValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Amount();
        
        $this->model->setAmazonCalculatedValue($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonCalculatedValue());
    }

    /**
     * Test attribute "preview_pickup_date"
     */
    public function testPropertyPreviewPickupDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPreviewPickupDate($testValue);
        $this->assertEquals($testValue, $this->model->getPreviewPickupDate());
    }

    /**
     * Test attribute "preview_delivery_date"
     */
    public function testPropertyPreviewDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPreviewDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getPreviewDeliveryDate());
    }

    /**
     * Test attribute "preview_freight_class"
     */
    public function testPropertyPreviewFreightClass()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\SellerFreightClass();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPreviewFreightClass($testValue);
        $this->assertEquals($testValue, $this->model->getPreviewFreightClass());
    }

    /**
     * Test attribute "amazon_reference_id"
     */
    public function testPropertyAmazonReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonReferenceId());
    }

    /**
     * Test attribute "is_bill_of_lading_available"
     */
    public function testPropertyIsBillOfLadingAvailable()
    {
        $testValue = true;
        
        $this->model->setIsBillOfLadingAvailable($testValue);
        $this->assertEquals($testValue, $this->model->getIsBillOfLadingAvailable());
    }

    /**
     * Test attribute "partnered_estimate"
     */
    public function testPropertyPartneredEstimate()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredEstimate();
        
        $this->model->setPartneredEstimate($testValue);
        $this->assertEquals($testValue, $this->model->getPartneredEstimate());
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
}
