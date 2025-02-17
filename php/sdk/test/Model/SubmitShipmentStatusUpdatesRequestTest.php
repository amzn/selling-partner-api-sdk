<?php
/**
 * SubmitShipmentStatusUpdatesRequestTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\SubmitShipmentStatusUpdatesRequest;

/**
 * SubmitShipmentStatusUpdatesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;submitShipmentStatusUpdates&#x60; operation.
 * @package     SpApi
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
