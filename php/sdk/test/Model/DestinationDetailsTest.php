<?php
/**
 * DestinationDetailsTest
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
use SpApi\Model\awd\v2024_05_09\DestinationDetails;

/**
 * DestinationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Destination details of an inbound order based on the assigned region and DC for the order.
 * @package     SpApi
 */
class DestinationDetailsTest extends TestCase
{

    private DestinationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DestinationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DestinationDetails"
     */
    public function testDestinationDetails()
    {
        $this->assertInstanceOf(DestinationDetails::class, $this->model);
    }

    /**
     * Test attribute "destination_address"
     */
    public function testPropertyDestinationAddress()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\Address();
        
        $this->model->setDestinationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAddress());
    }

    /**
     * Test attribute "destination_region"
     */
    public function testPropertyDestinationRegion()
    {
        $testValue = 'test';
        
        $this->model->setDestinationRegion($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationRegion());
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }
}
