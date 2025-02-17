<?php
/**
 * UpdateShipmentTrackingDetailsRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\UpdateShipmentTrackingDetailsRequest;

/**
 * UpdateShipmentTrackingDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateShipmentTrackingDetails&#x60; request.
 * @package     SpApi
 */
class UpdateShipmentTrackingDetailsRequestTest extends TestCase
{

    private UpdateShipmentTrackingDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateShipmentTrackingDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateShipmentTrackingDetailsRequest"
     */
    public function testUpdateShipmentTrackingDetailsRequest()
    {
        $this->assertInstanceOf(UpdateShipmentTrackingDetailsRequest::class, $this->model);
    }

    /**
     * Test attribute "tracking_details"
     */
    public function testPropertyTrackingDetails()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\TrackingDetailsInput();
        
        $this->model->setTrackingDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingDetails());
    }
}
