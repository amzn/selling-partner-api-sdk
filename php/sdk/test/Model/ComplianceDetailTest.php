<?php
/**
 * ComplianceDetailTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\ComplianceDetail;

/**
 * ComplianceDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Contains item identifiers and related tax information.
 * @package     OpenAPI\Client
 */
class ComplianceDetailTest extends TestCase
{

    private ComplianceDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ComplianceDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ComplianceDetail"
     */
    public function testComplianceDetail()
    {
        $this->assertInstanceOf(ComplianceDetail::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "fnsku"
     */
    public function testPropertyFnsku()
    {
        $testValue = 'test';
        
        $this->model->setFnsku($testValue);
        $this->assertEquals($testValue, $this->model->getFnsku());
    }

    /**
     * Test attribute "msku"
     */
    public function testPropertyMsku()
    {
        $testValue = 'test';
        
        $this->model->setMsku($testValue);
        $this->assertEquals($testValue, $this->model->getMsku());
    }

    /**
     * Test attribute "tax_details"
     */
    public function testPropertyTaxDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\TaxDetails();
        
        $this->model->setTaxDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTaxDetails());
    }
}
