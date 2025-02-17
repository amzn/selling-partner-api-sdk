<?php
/**
 * GenerateTransportationOptionsRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\GenerateTransportationOptionsRequest;

/**
 * GenerateTransportationOptionsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;generateTransportationOptions&#x60; request.
 * @package     SpApi
 */
class GenerateTransportationOptionsRequestTest extends TestCase
{

    private GenerateTransportationOptionsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerateTransportationOptionsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerateTransportationOptionsRequest"
     */
    public function testGenerateTransportationOptionsRequest()
    {
        $this->assertInstanceOf(GenerateTransportationOptionsRequest::class, $this->model);
    }

    /**
     * Test attribute "placement_option_id"
     */
    public function testPropertyPlacementOptionId()
    {
        $testValue = 'test';
        
        $this->model->setPlacementOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPlacementOptionId());
    }

    /**
     * Test attribute "shipment_transportation_configurations"
     */
    public function testPropertyShipmentTransportationConfigurations()
    {
        $testValue = [];
        
        $this->model->setShipmentTransportationConfigurations($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentTransportationConfigurations());
    }
}
