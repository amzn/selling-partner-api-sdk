<?php
/**
 * PurchaseShipmentResultTest
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
use OpenAPI\Client\Model\shipping\PurchaseShipmentResult;

/**
 * PurchaseShipmentResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the purchaseShipment operation.
 * @package     OpenAPI\Client
 */
class PurchaseShipmentResultTest extends TestCase
{

    private PurchaseShipmentResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PurchaseShipmentResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PurchaseShipmentResult"
     */
    public function testPurchaseShipmentResult()
    {
        $this->assertInstanceOf(PurchaseShipmentResult::class, $this->model);
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
}
