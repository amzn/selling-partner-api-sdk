<?php
/**
 * PartneredLtlDataInputTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredLtlDataInput;

/**
 * PartneredLtlDataInputTest Class Doc Comment
 *
 * @category    Class
 * @description Information that is required by an Amazon-partnered carrier to ship a Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.
 * @package     OpenAPI\Client
 */
class PartneredLtlDataInputTest extends TestCase
{

    private PartneredLtlDataInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PartneredLtlDataInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PartneredLtlDataInput"
     */
    public function testPartneredLtlDataInput()
    {
        $this->assertInstanceOf(PartneredLtlDataInput::class, $this->model);
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
}
