<?php
/**
 * RejectedShippingServiceTest
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
use SpApi\Model\merchantFulfillment\v0\RejectedShippingService;

/**
 * RejectedShippingServiceTest Class Doc Comment
 *
 * @category    Class
 * @description Information about a rejected shipping service
 * @package     SpApi
 */
class RejectedShippingServiceTest extends TestCase
{

    private RejectedShippingService $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RejectedShippingService();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RejectedShippingService"
     */
    public function testRejectedShippingService()
    {
        $this->assertInstanceOf(RejectedShippingService::class, $this->model);
    }

    /**
     * Test attribute "carrier_name"
     */
    public function testPropertyCarrierName()
    {
        $testValue = 'test';
        
        $this->model->setCarrierName($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierName());
    }

    /**
     * Test attribute "shipping_service_name"
     */
    public function testPropertyShippingServiceName()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceName($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceName());
    }

    /**
     * Test attribute "shipping_service_id"
     */
    public function testPropertyShippingServiceId()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceId());
    }

    /**
     * Test attribute "rejection_reason_code"
     */
    public function testPropertyRejectionReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setRejectionReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReasonCode());
    }

    /**
     * Test attribute "rejection_reason_message"
     */
    public function testPropertyRejectionReasonMessage()
    {
        $testValue = 'test';
        
        $this->model->setRejectionReasonMessage($testValue);
        $this->assertEquals($testValue, $this->model->getRejectionReasonMessage());
    }
}
