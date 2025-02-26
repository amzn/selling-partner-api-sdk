<?php
/**
 * InboundOrderTest
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
use SpApi\Model\awd\v2024_05_09\InboundOrder;

/**
 * InboundOrderTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an AWD inbound order.
 * @package     SpApi
 */
class InboundOrderTest extends TestCase
{

    private InboundOrder $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundOrder();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundOrder"
     */
    public function testInboundOrder()
    {
        $this->assertInstanceOf(InboundOrder::class, $this->model);
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
     * Test attribute "destination_details"
     */
    public function testPropertyDestinationDetails()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\DestinationDetails();
        
        $this->model->setDestinationDetails($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationDetails());
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
     * Test attribute "order_status"
     */
    public function testPropertyOrderStatus()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\InboundStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOrderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getOrderStatus());
    }

    /**
     * Test attribute "origin_address"
     */
    public function testPropertyOriginAddress()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\Address();
        
        $this->model->setOriginAddress($testValue);
        $this->assertEquals($testValue, $this->model->getOriginAddress());
    }

    /**
     * Test attribute "packages_to_inbound"
     */
    public function testPropertyPackagesToInbound()
    {
        $testValue = [];
        
        $this->model->setPackagesToInbound($testValue);
        $this->assertEquals($testValue, $this->model->getPackagesToInbound());
    }

    /**
     * Test attribute "preferences"
     */
    public function testPropertyPreferences()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\InboundPreferences();
        
        $this->model->setPreferences($testValue);
        $this->assertEquals($testValue, $this->model->getPreferences());
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
