<?php
/**
 * TransportationDetailsTest
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
use SpApi\Model\awd\v2024_05_09\TransportationDetails;

/**
 * TransportationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Transportation details for the shipment.
 * @package     SpApi
 */
class TransportationDetailsTest extends TestCase
{

    private TransportationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportationDetails"
     */
    public function testTransportationDetails()
    {
        $this->assertInstanceOf(TransportationDetails::class, $this->model);
    }

    /**
     * Test attribute "tracking_details"
     */
    public function testPropertyTrackingDetails()
    {
        $testValue = [];
        
        $this->model->setTrackingDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingDetails());
    }
}
