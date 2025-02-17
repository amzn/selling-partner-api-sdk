<?php
/**
 * InboundShipmentSummaryTest
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
use SpApi\Model\awd\v2024_05_09\InboundShipmentSummary;

/**
 * InboundShipmentSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description Summary for an AWD inbound shipment containing the shipment ID, which can be used to retrieve the actual shipment.
 * @package     SpApi
 */
class InboundShipmentSummaryTest extends TestCase
{

    private InboundShipmentSummary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentSummary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentSummary"
     */
    public function testInboundShipmentSummary()
    {
        $this->assertInstanceOf(InboundShipmentSummary::class, $this->model);
    }

    /**
     * Test attribute "created_at"
     */
    public function testPropertyCreatedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedAt());
    }

    /**
     * Test attribute "external_reference_id"
     */
    public function testPropertyExternalReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setExternalReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getExternalReferenceId());
    }

    /**
     * Test attribute "order_id"
     */
    public function testPropertyOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderId());
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }

    /**
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\InboundShipmentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "updated_at"
     */
    public function testPropertyUpdatedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setUpdatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getUpdatedAt());
    }
}
