<?php
/**
 * SKUInboundGuidanceTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\SKUInboundGuidance;

/**
 * SKUInboundGuidanceTest Class Doc Comment
 *
 * @category    Class
 * @description Reasons why a given seller SKU is not recommended for shipment to Amazon&#39;s fulfillment network.
 * @package     OpenAPI\Client
 */
class SKUInboundGuidanceTest extends TestCase
{

    private SKUInboundGuidance $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SKUInboundGuidance();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SKUInboundGuidance"
     */
    public function testSKUInboundGuidance()
    {
        $this->assertInstanceOf(SKUInboundGuidance::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
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
     * Test attribute "inbound_guidance"
     */
    public function testPropertyInboundGuidance()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\InboundGuidance();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setInboundGuidance($testValue);
        $this->assertEquals($testValue, $this->model->getInboundGuidance());
    }

    /**
     * Test attribute "guidance_reason_list"
     */
    public function testPropertyGuidanceReasonList()
    {
        $testValue = [];
        
        $this->model->setGuidanceReasonList($testValue);
        $this->assertEquals($testValue, $this->model->getGuidanceReasonList());
    }
}
