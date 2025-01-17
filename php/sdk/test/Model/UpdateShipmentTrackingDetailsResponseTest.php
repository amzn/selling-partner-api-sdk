<?php
/**
 * UpdateShipmentTrackingDetailsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\UpdateShipmentTrackingDetailsResponse;

/**
 * UpdateShipmentTrackingDetailsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;updateShipmentTrackingDetails&#x60; response.
 * @package     OpenAPI\Client
 */
class UpdateShipmentTrackingDetailsResponseTest extends TestCase
{

    private UpdateShipmentTrackingDetailsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UpdateShipmentTrackingDetailsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UpdateShipmentTrackingDetailsResponse"
     */
    public function testUpdateShipmentTrackingDetailsResponse()
    {
        $this->assertInstanceOf(UpdateShipmentTrackingDetailsResponse::class, $this->model);
    }

    /**
     * Test attribute "operation_id"
     */
    public function testPropertyOperationId()
    {
        $testValue = 'test';
        
        $this->model->setOperationId($testValue);
        $this->assertEquals($testValue, $this->model->getOperationId());
    }
}
