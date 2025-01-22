<?php
/**
 * ASINInboundGuidanceTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\ASINInboundGuidance;

/**
 * ASINInboundGuidanceTest Class Doc Comment
 *
 * @category    Class
 * @description Reasons why a given ASIN is not recommended for shipment to Amazon&#39;s fulfillment network.
 * @package     OpenAPI\Client
 */
class ASINInboundGuidanceTest extends TestCase
{

    private ASINInboundGuidance $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ASINInboundGuidance();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ASINInboundGuidance"
     */
    public function testASINInboundGuidance()
    {
        $this->assertInstanceOf(ASINInboundGuidance::class, $this->model);
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
