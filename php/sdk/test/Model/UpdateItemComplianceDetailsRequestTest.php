<?php
/**
 * UpdateItemComplianceDetailsRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\UpdateItemComplianceDetailsRequest;

/**
 * UpdateItemComplianceDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateItemComplianceDetails&#x60; request.
 * @package     OpenAPI\Client
 */
class UpdateItemComplianceDetailsRequestTest extends TestCase
{

    private UpdateItemComplianceDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateItemComplianceDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateItemComplianceDetailsRequest"
     */
    public function testUpdateItemComplianceDetailsRequest()
    {
        $this->assertInstanceOf(UpdateItemComplianceDetailsRequest::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\TaxDetails();
        
        $this->model->setTaxDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTaxDetails());
    }
}
