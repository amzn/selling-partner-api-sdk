<?php
/**
 * GetShipmentLabelsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendor\shipments\GetShipmentLabels;

/**
 * GetShipmentLabelsTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the GetShipmentLabels operation.
 * @package     OpenAPI\Client
 */
class GetShipmentLabelsTest extends TestCase
{

    private GetShipmentLabels $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentLabels();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentLabels"
     */
    public function testGetShipmentLabels()
    {
        $this->assertInstanceOf(GetShipmentLabels::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\TransportationLabels();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
