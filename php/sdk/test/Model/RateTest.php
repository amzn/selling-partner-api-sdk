<?php
/**
 * RateTest
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
use SpApi\Model\shipping\v2\Rate;

/**
 * RateTest Class Doc Comment
 *
 * @category    Class
 * @description The details of a shipping service offering.
 * @package     SpApi
 */
class RateTest extends TestCase
{

    private Rate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Rate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Rate"
     */
    public function testRate()
    {
        $this->assertInstanceOf(Rate::class, $this->model);
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
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
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
     * Test attribute "service_id"
     */
    public function testPropertyServiceId()
    {
        $testValue = 'test';
        
        $this->model->setServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getServiceId());
    }

    /**
     * Test attribute "service_name"
     */
    public function testPropertyServiceName()
    {
        $testValue = 'test';
        
        $this->model->setServiceName($testValue);
        $this->assertEquals($testValue, $this->model->getServiceName());
    }

    /**
     * Test attribute "billed_weight"
     */
    public function testPropertyBilledWeight()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Weight();
        
        $this->model->setBilledWeight($testValue);
        $this->assertEquals($testValue, $this->model->getBilledWeight());
    }

    /**
     * Test attribute "total_charge"
     */
    public function testPropertyTotalCharge()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Currency();
        
        $this->model->setTotalCharge($testValue);
        $this->assertEquals($testValue, $this->model->getTotalCharge());
    }

    /**
     * Test attribute "promise"
     */
    public function testPropertyPromise()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Promise();
        
        $this->model->setPromise($testValue);
        $this->assertEquals($testValue, $this->model->getPromise());
    }

    /**
     * Test attribute "supported_document_specifications"
     */
    public function testPropertySupportedDocumentSpecifications()
    {
        $testValue = [];
        
        $this->model->setSupportedDocumentSpecifications($testValue);
        $this->assertEquals($testValue, $this->model->getSupportedDocumentSpecifications());
    }

    /**
     * Test attribute "available_value_added_service_groups"
     */
    public function testPropertyAvailableValueAddedServiceGroups()
    {
        $testValue = [];
        
        $this->model->setAvailableValueAddedServiceGroups($testValue);
        $this->assertEquals($testValue, $this->model->getAvailableValueAddedServiceGroups());
    }

    /**
     * Test attribute "requires_additional_inputs"
     */
    public function testPropertyRequiresAdditionalInputs()
    {
        $testValue = true;
        
        $this->model->setRequiresAdditionalInputs($testValue);
        $this->assertEquals($testValue, $this->model->getRequiresAdditionalInputs());
    }

    /**
     * Test attribute "rate_item_list"
     */
    public function testPropertyRateItemList()
    {
        $testValue = [];
        
        $this->model->setRateItemList($testValue);
        $this->assertEquals($testValue, $this->model->getRateItemList());
    }

    /**
     * Test attribute "payment_type"
     */
    public function testPropertyPaymentType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\PaymentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPaymentType($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentType());
    }

    /**
     * Test attribute "benefits"
     */
    public function testPropertyBenefits()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Benefits();
        
        $this->model->setBenefits($testValue);
        $this->assertEquals($testValue, $this->model->getBenefits());
    }
}
