<?php
/**
 * OrderAcknowledgementTest
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
use OpenAPI\Client\Model\vendorOrders\OrderAcknowledgement;

/**
 * OrderAcknowledgementTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an acknowledgement for an order, including the purchase order number, selling party details, acknowledgement date, and a list of acknowledged items.
 * @package     OpenAPI\Client
 */
class OrderAcknowledgementTest extends TestCase
{

    private OrderAcknowledgement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderAcknowledgement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderAcknowledgement"
     */
    public function testOrderAcknowledgement()
    {
        $this->assertInstanceOf(OrderAcknowledgement::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\vendorOrders\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
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
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
