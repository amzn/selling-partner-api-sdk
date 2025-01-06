<?php
/**
 * InboundPlanTest
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
use OpenAPI\Client\Model\fulfillmentInbound\InboundPlan;

/**
 * InboundPlanTest Class Doc Comment
 *
 * @category    Class
 * @description Inbound plan containing details of the inbound workflow.
 * @package     OpenAPI\Client
 */
class InboundPlanTest extends TestCase
{

    private InboundPlan $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundPlan();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundPlan"
     */
    public function testInboundPlan()
    {
        $this->assertInstanceOf(InboundPlan::class, $this->model);
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
     * Test attribute "packing_options"
     */
    public function testPropertyPackingOptions()
    {
        $testValue = [];
        
        $this->model->setPackingOptions($testValue);
        $this->assertEquals($testValue, $this->model->getPackingOptions());
    }

    /**
     * Test attribute "placement_options"
     */
    public function testPropertyPlacementOptions()
    {
        $testValue = [];
        
        $this->model->setPlacementOptions($testValue);
        $this->assertEquals($testValue, $this->model->getPlacementOptions());
    }

    /**
     * Test attribute "shipments"
     */
    public function testPropertyShipments()
    {
        $testValue = [];
        
        $this->model->setShipments($testValue);
        $this->assertEquals($testValue, $this->model->getShipments());
    }

    /**
     * Test attribute "source_address"
     */
    public function testPropertySourceAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Address();
        
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
