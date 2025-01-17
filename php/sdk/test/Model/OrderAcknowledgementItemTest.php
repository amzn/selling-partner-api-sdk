<?php
/**
 * OrderAcknowledgementItemTest
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
use OpenAPI\Client\Model\vendor\df\orders\OrderAcknowledgementItem;

/**
 * OrderAcknowledgementItemTest Class Doc Comment
 *
 * @category    Class
 * @description Details of an individual order being acknowledged.
 * @package     OpenAPI\Client
 */
class OrderAcknowledgementItemTest extends TestCase
{

    private OrderAcknowledgementItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderAcknowledgementItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderAcknowledgementItem"
     */
    public function testOrderAcknowledgementItem()
    {
        $this->assertInstanceOf(OrderAcknowledgementItem::class, $this->model);
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
     * Test attribute "vendor_order_number"
     */
    public function testPropertyVendorOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setVendorOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getVendorOrderNumber());
    }

    /**
     * Test attribute "acknowledgement_date"
     */
    public function testPropertyAcknowledgementDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setAcknowledgementDate($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgementDate());
    }

    /**
     * Test attribute "acknowledgement_status"
     */
    public function testPropertyAcknowledgementStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\orders\AcknowledgementStatus();
        
        $this->model->setAcknowledgementStatus($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgementStatus());
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\orders\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\orders\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "item_acknowledgements"
     */
    public function testPropertyItemAcknowledgements()
    {
        $testValue = [];
        
        $this->model->setItemAcknowledgements($testValue);
        $this->assertEquals($testValue, $this->model->getItemAcknowledgements());
    }
}
