<?php
/**
 * InboundShipmentPlanRequestItemTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentPlanRequestItem;

/**
 * InboundShipmentPlanRequestItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for creating an inbound shipment plan. Submitted with a call to the createInboundShipmentPlan operation.
 * @package     OpenAPI\Client
 */
class InboundShipmentPlanRequestItemTest extends TestCase
{

    private InboundShipmentPlanRequestItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentPlanRequestItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentPlanRequestItem"
     */
    public function testInboundShipmentPlanRequestItem()
    {
        $this->assertInstanceOf(InboundShipmentPlanRequestItem::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "condition"
     */
    public function testPropertyCondition()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Condition();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCondition($testValue);
        $this->assertEquals($testValue, $this->model->getCondition());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "quantity_in_case"
     */
    public function testPropertyQuantityInCase()
    {
        $testValue = 123;
        
        $this->model->setQuantityInCase($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityInCase());
    }

    /**
     * Test attribute "prep_details_list"
     */
    public function testPropertyPrepDetailsList()
    {
        $testValue = [];
        
        $this->model->setPrepDetailsList($testValue);
        $this->assertEquals($testValue, $this->model->getPrepDetailsList());
    }
}
