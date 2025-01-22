<?php
/**
 * TransportResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\TransportResult;

/**
 * TransportResultTest Class Doc Comment
 *
 * @category    Class
 * @description The workflow status for a shipment with an Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class TransportResultTest extends TestCase
{

    private TransportResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportResult"
     */
    public function testTransportResult()
    {
        $this->assertInstanceOf(TransportResult::class, $this->model);
    }

    /**
     * Test attribute "transport_status"
     */
    public function testPropertyTransportStatus()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTransportStatus($testValue);
        $this->assertEquals($testValue, $this->model->getTransportStatus());
    }

    /**
     * Test attribute "error_code"
     */
    public function testPropertyErrorCode()
    {
        $testValue = 'test';
        
        $this->model->setErrorCode($testValue);
        $this->assertEquals($testValue, $this->model->getErrorCode());
    }

    /**
     * Test attribute "error_description"
     */
    public function testPropertyErrorDescription()
    {
        $testValue = 'test';
        
        $this->model->setErrorDescription($testValue);
        $this->assertEquals($testValue, $this->model->getErrorDescription());
    }
}
