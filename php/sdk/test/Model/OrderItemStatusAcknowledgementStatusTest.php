<?php
/**
 * OrderItemStatusAcknowledgementStatusTest
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
use OpenAPI\Client\Model\vendor\orders\OrderItemStatusAcknowledgementStatus;

/**
 * OrderItemStatusAcknowledgementStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Acknowledgement status information.
 * @package     OpenAPI\Client
 */
class OrderItemStatusAcknowledgementStatusTest extends TestCase
{

    private OrderItemStatusAcknowledgementStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemStatusAcknowledgementStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemStatusAcknowledgementStatus"
     */
    public function testOrderItemStatusAcknowledgementStatus()
    {
        $this->assertInstanceOf(OrderItemStatusAcknowledgementStatus::class, $this->model);
    }

    /**
     * Test attribute "confirmation_status"
     */
    public function testPropertyConfirmationStatus()
    {
        $enumInstance = new OrderItemStatusAcknowledgementStatus();
        $allowedValues = $enumInstance->getConfirmationStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setConfirmationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getConfirmationStatus());
    }

    /**
     * Test attribute "accepted_quantity"
     */
    public function testPropertyAcceptedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\ItemQuantity();
        
        $this->model->setAcceptedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAcceptedQuantity());
    }

    /**
     * Test attribute "rejected_quantity"
     */
    public function testPropertyRejectedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\ItemQuantity();
        
        $this->model->setRejectedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getRejectedQuantity());
    }

    /**
     * Test attribute "acknowledgement_status_details"
     */
    public function testPropertyAcknowledgementStatusDetails()
    {
        $testValue = [];
        
        $this->model->setAcknowledgementStatusDetails($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgementStatusDetails());
    }
}
