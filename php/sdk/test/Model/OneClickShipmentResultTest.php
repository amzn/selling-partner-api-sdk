<?php
/**
 * OneClickShipmentResultTest
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
use OpenAPI\Client\Model\shipping\OneClickShipmentResult;

/**
 * OneClickShipmentResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the OneClickShipment API.
 * @package     OpenAPI\Client
 */
class OneClickShipmentResultTest extends TestCase
{

    private OneClickShipmentResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OneClickShipmentResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OneClickShipmentResult"
     */
    public function testOneClickShipmentResult()
    {
        $this->assertInstanceOf(OneClickShipmentResult::class, $this->model);
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
     * Test attribute "package_document_details"
     */
    public function testPropertyPackageDocumentDetails()
    {
        $testValue = [];
        
        $this->model->setPackageDocumentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDocumentDetails());
    }

    /**
     * Test attribute "promise"
     */
    public function testPropertyPromise()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Promise();
        
        $this->model->setPromise($testValue);
        $this->assertEquals($testValue, $this->model->getPromise());
    }

    /**
     * Test attribute "carrier"
     */
    public function testPropertyCarrier()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Carrier();
        
        $this->model->setCarrier($testValue);
        $this->assertEquals($testValue, $this->model->getCarrier());
    }

    /**
     * Test attribute "service"
     */
    public function testPropertyService()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Service();
        
        $this->model->setService($testValue);
        $this->assertEquals($testValue, $this->model->getService());
    }

    /**
     * Test attribute "total_charge"
     */
    public function testPropertyTotalCharge()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Currency();
        
        $this->model->setTotalCharge($testValue);
        $this->assertEquals($testValue, $this->model->getTotalCharge());
    }
}
