<?php
/**
 * GetInboundGuidanceResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\GetInboundGuidanceResult;

/**
 * GetInboundGuidanceResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the get inbound guidance operation
 * @package     OpenAPI\Client
 */
class GetInboundGuidanceResultTest extends TestCase
{

    private GetInboundGuidanceResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInboundGuidanceResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInboundGuidanceResult"
     */
    public function testGetInboundGuidanceResult()
    {
        $this->assertInstanceOf(GetInboundGuidanceResult::class, $this->model);
    }

    /**
     * Test attribute "sku_inbound_guidance_list"
     */
    public function testPropertySkuInboundGuidanceList()
    {
        $testValue = [];
        
        $this->model->setSkuInboundGuidanceList($testValue);
        $this->assertEquals($testValue, $this->model->getSkuInboundGuidanceList());
    }

    /**
     * Test attribute "invalid_sku_list"
     */
    public function testPropertyInvalidSkuList()
    {
        $testValue = [];
        
        $this->model->setInvalidSkuList($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidSkuList());
    }

    /**
     * Test attribute "asin_inbound_guidance_list"
     */
    public function testPropertyAsinInboundGuidanceList()
    {
        $testValue = [];
        
        $this->model->setAsinInboundGuidanceList($testValue);
        $this->assertEquals($testValue, $this->model->getAsinInboundGuidanceList());
    }

    /**
     * Test attribute "invalid_asin_list"
     */
    public function testPropertyInvalidAsinList()
    {
        $testValue = [];
        
        $this->model->setInvalidAsinList($testValue);
        $this->assertEquals($testValue, $this->model->getInvalidAsinList());
    }
}
