<?php
/**
 * OrderItemAcknowledgementTest
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
use OpenAPI\Client\Model\vendor\orders\OrderItemAcknowledgement;

/**
 * OrderItemAcknowledgementTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the acknowledgement details for an individual order item, including the acknowledgement code, acknowledged quantity, scheduled ship and delivery dates, and rejection reason (if applicable).
 * @package     OpenAPI\Client
 */
class OrderItemAcknowledgementTest extends TestCase
{

    private OrderItemAcknowledgement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemAcknowledgement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemAcknowledgement"
     */
    public function testOrderItemAcknowledgement()
    {
        $this->assertInstanceOf(OrderItemAcknowledgement::class, $this->model);
    }

    /**
     * Test attribute "acknowledgement_code"
     */
    public function testPropertyAcknowledgementCode()
    {
        $enumInstance = new OrderItemAcknowledgement();
        $allowedValues = $enumInstance->getAcknowledgementCodeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setAcknowledgementCode($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgementCode());
    }

    /**
     * Test attribute "acknowledged_quantity"
     */
    public function testPropertyAcknowledgedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\ItemQuantity();
        
        $this->model->setAcknowledgedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgedQuantity());
    }

    /**
     * Test attribute "scheduled_ship_date"
     */
    public function testPropertyScheduledShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setScheduledShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledShipDate());
    }

    /**
     * Test attribute "scheduled_delivery_date"
     */
    public function testPropertyScheduledDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setScheduledDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledDeliveryDate());
    }

    /**
     * Test attribute "rejection_reason"
     */
    public function testPropertyRejectionReason()
    {
        $enumInstance = new OrderItemAcknowledgement();
        $allowedValues = $enumInstance->getRejectionReasonAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setRejectionReason($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReason());
    }
}
