<?php
/**
 * ImportDetailsTest
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
use SpApi\Model\vendor\orders\v1\ImportDetails;

/**
 * ImportDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Import details for an import order.
 * @package     SpApi
 */
class ImportDetailsTest extends TestCase
{

    private ImportDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ImportDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ImportDetails"
     */
    public function testImportDetails()
    {
        $this->assertInstanceOf(ImportDetails::class, $this->model);
    }

    /**
     * Test attribute "method_of_payment"
     */
    public function testPropertyMethodOfPayment()
    {
        $enumInstance = new ImportDetails();
        $allowedValues = $enumInstance->getMethodOfPaymentAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setMethodOfPayment($testValue);
        $this->assertEquals($testValue, $this->model->getMethodOfPayment());
    }

    /**
     * Test attribute "international_commercial_terms"
     */
    public function testPropertyInternationalCommercialTerms()
    {
        $enumInstance = new ImportDetails();
        $allowedValues = $enumInstance->getInternationalCommercialTermsAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setInternationalCommercialTerms($testValue);
        $this->assertEquals($testValue, $this->model->getInternationalCommercialTerms());
    }

    /**
     * Test attribute "port_of_delivery"
     */
    public function testPropertyPortOfDelivery()
    {
        $testValue = 'test';
        
        $this->model->setPortOfDelivery($testValue);
        $this->assertEquals($testValue, $this->model->getPortOfDelivery());
    }

    /**
     * Test attribute "import_containers"
     */
    public function testPropertyImportContainers()
    {
        $testValue = 'test';
        
        $this->model->setImportContainers($testValue);
        $this->assertEquals($testValue, $this->model->getImportContainers());
    }

    /**
     * Test attribute "shipping_instructions"
     */
    public function testPropertyShippingInstructions()
    {
        $testValue = 'test';
        
        $this->model->setShippingInstructions($testValue);
        $this->assertEquals($testValue, $this->model->getShippingInstructions());
    }
}
