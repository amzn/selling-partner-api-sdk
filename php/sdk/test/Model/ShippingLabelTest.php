<?php
/**
 * ShippingLabelTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendorDfShipping\ShippingLabel;

/**
 * ShippingLabelTest Class Doc Comment
 *
 * @category    Class
 * @description Shipping label information for an order, including the purchase order number, selling party, ship from party, label format, and package details.
 * @package     OpenAPI\Client
 */
class ShippingLabelTest extends TestCase
{

    private ShippingLabel $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingLabel();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingLabel"
     */
    public function testShippingLabel()
    {
        $this->assertInstanceOf(ShippingLabel::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "label_format"
     */
    public function testPropertyLabelFormat()
    {
        $enumInstance = new ShippingLabel();
        $allowedValues = $enumInstance->getLabelFormatAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setLabelFormat($testValue);
        $this->assertEquals($testValue, $this->model->getLabelFormat());
    }

    /**
     * Test attribute "label_data"
     */
    public function testPropertyLabelData()
    {
        $testValue = [];
        
        $this->model->setLabelData($testValue);
        $this->assertEquals($testValue, $this->model->getLabelData());
    }
}
