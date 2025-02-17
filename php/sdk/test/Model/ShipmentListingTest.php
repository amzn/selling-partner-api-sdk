<?php
/**
 * ShipmentListingTest
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
use SpApi\Model\awd\v2024_05_09\ShipmentListing;

/**
 * ShipmentListingTest Class Doc Comment
 *
 * @category    Class
 * @description A list of inbound shipment summaries filtered by the attributes specified in the request.
 * @package     SpApi
 */
class ShipmentListingTest extends TestCase
{

    private ShipmentListing $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentListing();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentListing"
     */
    public function testShipmentListing()
    {
        $this->assertInstanceOf(ShipmentListing::class, $this->model);
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
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
}
