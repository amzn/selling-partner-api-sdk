<?php
/**
 * UpdateShipmentTrackingDetailsRequestTest
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
use OpenAPI\Client\Model\fulfillmentInbound\UpdateShipmentTrackingDetailsRequest;

/**
 * UpdateShipmentTrackingDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateShipmentTrackingDetails&#x60; request.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\TrackingDetailsInput();
        
        $this->model->setTrackingDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingDetails());
    }
}
