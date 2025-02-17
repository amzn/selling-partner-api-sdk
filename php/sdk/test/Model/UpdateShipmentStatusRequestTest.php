<?php
/**
 * UpdateShipmentStatusRequestTest
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
use SpApi\Model\orders\v0\UpdateShipmentStatusRequest;

/**
 * UpdateShipmentStatusRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the &#x60;updateShipmentStatus&#x60; operation.
 * @package     SpApi
 */
class UpdateShipmentStatusRequestTest extends TestCase
{

    private UpdateShipmentStatusRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateShipmentStatusRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateShipmentStatusRequest"
     */
    public function testUpdateShipmentStatusRequest()
    {
        $this->assertInstanceOf(UpdateShipmentStatusRequest::class, $this->model);
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
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new \SpApi\Model\orders\v0\ShipmentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "order_items"
     */
    public function testPropertyOrderItems()
    {
        $testValue = [];
        
        $this->model->setOrderItems($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItems());
    }
}
