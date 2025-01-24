<?php
/**
 * SubmitShipmentsTest
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
use OpenAPI\Client\Model\vendor\shipments\SubmitShipments;

/**
 * SubmitShipmentsTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the SubmitShipments operation.
 * @package     OpenAPI\Client
 */
class SubmitShipmentsTest extends TestCase
{

    private SubmitShipments $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitShipments();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitShipments"
     */
    public function testSubmitShipments()
    {
        $this->assertInstanceOf(SubmitShipments::class, $this->model);
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
