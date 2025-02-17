<?php
/**
 * SubmitShipmentConfirmationsRequestTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\SubmitShipmentConfirmationsRequest;

/**
 * SubmitShipmentConfirmationsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitShipmentConfirmations operation.
 * @package     SpApi
 */
class SubmitShipmentConfirmationsRequestTest extends TestCase
{

    private SubmitShipmentConfirmationsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitShipmentConfirmationsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitShipmentConfirmationsRequest"
     */
    public function testSubmitShipmentConfirmationsRequest()
    {
        $this->assertInstanceOf(SubmitShipmentConfirmationsRequest::class, $this->model);
    }

    /**
     * Test attribute "shipment_confirmations"
     */
    public function testPropertyShipmentConfirmations()
    {
        $testValue = [];
        
        $this->model->setShipmentConfirmations($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentConfirmations());
    }
}
