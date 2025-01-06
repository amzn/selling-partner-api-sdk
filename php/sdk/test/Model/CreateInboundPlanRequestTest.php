<?php
/**
 * CreateInboundPlanRequestTest
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
use OpenAPI\Client\Model\fulfillmentInbound\CreateInboundPlanRequest;

/**
 * CreateInboundPlanRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;createInboundPlan&#x60; request.
 * @package     OpenAPI\Client
 */
class CreateInboundPlanRequestTest extends TestCase
{

    private CreateInboundPlanRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateInboundPlanRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateInboundPlanRequest"
     */
    public function testCreateInboundPlanRequest()
    {
        $this->assertInstanceOf(CreateInboundPlanRequest::class, $this->model);
    }

    /**
     * Test attribute "destination_marketplaces"
     */
    public function testPropertyDestinationMarketplaces()
    {
        $testValue = [];
        
        $this->model->setDestinationMarketplaces($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationMarketplaces());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\AddressInput();
        
        $this->model->setSourceAddress($testValue);
        $this->assertEquals($testValue, $this->model->getSourceAddress());
    }
}
