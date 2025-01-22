<?php
/**
 * OrderItemStatusReceivingStatusTest
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
use OpenAPI\Client\Model\vendor\orders\OrderItemStatusReceivingStatus;

/**
 * OrderItemStatusReceivingStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Item receive status at the buyer&#39;s warehouse.
 * @package     OpenAPI\Client
 */
class OrderItemStatusReceivingStatusTest extends TestCase
{

    private OrderItemStatusReceivingStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemStatusReceivingStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemStatusReceivingStatus"
     */
    public function testOrderItemStatusReceivingStatus()
    {
        $this->assertInstanceOf(OrderItemStatusReceivingStatus::class, $this->model);
    }

    /**
     * Test attribute "receive_status"
     */
    public function testPropertyReceiveStatus()
    {
        $enumInstance = new OrderItemStatusReceivingStatus();
        $allowedValues = $enumInstance->getReceiveStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setReceiveStatus($testValue);
        $this->assertEquals($testValue, $this->model->getReceiveStatus());
    }

    /**
     * Test attribute "received_quantity"
     */
    public function testPropertyReceivedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\ItemQuantity();
        
        $this->model->setReceivedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getReceivedQuantity());
    }

    /**
     * Test attribute "last_receive_date"
     */
    public function testPropertyLastReceiveDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLastReceiveDate($testValue);
        $this->assertEquals($testValue, $this->model->getLastReceiveDate());
    }
}
