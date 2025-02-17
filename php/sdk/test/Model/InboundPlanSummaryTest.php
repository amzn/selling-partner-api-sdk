<?php
/**
 * InboundPlanSummaryTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\InboundPlanSummary;

/**
 * InboundPlanSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description A light-weight inbound plan.
 * @package     SpApi
 */
class InboundPlanSummaryTest extends TestCase
{

    private InboundPlanSummary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundPlanSummary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundPlanSummary"
     */
    public function testInboundPlanSummary()
    {
        $this->assertInstanceOf(InboundPlanSummary::class, $this->model);
    }

    /**
     * Test attribute "created_at"
     */
    public function testPropertyCreatedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedAt());
    }

    /**
     * Test attribute "inbound_plan_id"
     */
    public function testPropertyInboundPlanId()
    {
        $testValue = 'test';
        
        $this->model->setInboundPlanId($testValue);
        $this->assertEquals($testValue, $this->model->getInboundPlanId());
    }

    /**
     * Test attribute "last_updated_at"
     */
    public function testPropertyLastUpdatedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLastUpdatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getLastUpdatedAt());
    }

    /**
     * Test attribute "marketplace_ids"
     */
    public function testPropertyMarketplaceIds()
    {
        $testValue = [];
        
        $this->model->setMarketplaceIds($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceIds());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "source_address"
     */
    public function testPropertySourceAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Address();
        
        $this->model->setSourceAddress($testValue);
        $this->assertEquals($testValue, $this->model->getSourceAddress());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
