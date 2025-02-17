<?php
/**
 * PurchaseShipmentRequestTest
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
use SpApi\Model\shipping\v2\PurchaseShipmentRequest;

/**
 * PurchaseShipmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the purchaseShipment operation.
 * @package     SpApi
 */
class PurchaseShipmentRequestTest extends TestCase
{

    private PurchaseShipmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PurchaseShipmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PurchaseShipmentRequest"
     */
    public function testPurchaseShipmentRequest()
    {
        $this->assertInstanceOf(PurchaseShipmentRequest::class, $this->model);
    }

    /**
     * Test attribute "request_token"
     */
    public function testPropertyRequestToken()
    {
        $testValue = 'test';
        
        $this->model->setRequestToken($testValue);
        $this->assertEquals($testValue, $this->model->getRequestToken());
    }

    /**
     * Test attribute "rate_id"
     */
    public function testPropertyRateId()
    {
        $testValue = 'test';
        
        $this->model->setRateId($testValue);
        $this->assertEquals($testValue, $this->model->getRateId());
    }

    /**
     * Test attribute "requested_document_specification"
     */
    public function testPropertyRequestedDocumentSpecification()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\RequestedDocumentSpecification();
        
        $this->model->setRequestedDocumentSpecification($testValue);
        $this->assertEquals($testValue, $this->model->getRequestedDocumentSpecification());
    }

    /**
     * Test attribute "requested_value_added_services"
     */
    public function testPropertyRequestedValueAddedServices()
    {
        $testValue = [];
        
        $this->model->setRequestedValueAddedServices($testValue);
        $this->assertEquals($testValue, $this->model->getRequestedValueAddedServices());
    }

    /**
     * Test attribute "additional_inputs"
     */
    public function testPropertyAdditionalInputs()
    {
        $testValue = array();
        
        $this->model->setAdditionalInputs($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalInputs());
    }
}
