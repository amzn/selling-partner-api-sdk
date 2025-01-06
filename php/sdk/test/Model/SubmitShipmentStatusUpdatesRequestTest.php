<?php
/**
 * SubmitShipmentStatusUpdatesRequestTest
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
use OpenAPI\Client\Model\vendorDfShipping\SubmitShipmentStatusUpdatesRequest;

/**
 * SubmitShipmentStatusUpdatesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitShipmentStatusUpdates operation.
 * @package     OpenAPI\Client
 */
class SubmitShipmentStatusUpdatesRequestTest extends TestCase
{

    private SubmitShipmentStatusUpdatesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitShipmentStatusUpdatesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitShipmentStatusUpdatesRequest"
     */
    public function testSubmitShipmentStatusUpdatesRequest()
    {
        $this->assertInstanceOf(SubmitShipmentStatusUpdatesRequest::class, $this->model);
    }

    /**
     * Test attribute "shipment_status_updates"
     */
    public function testPropertyShipmentStatusUpdates()
    {
        $testValue = [];
        
        $this->model->setShipmentStatusUpdates($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatusUpdates());
    }
}
