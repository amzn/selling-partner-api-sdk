<?php
/**
 * SubmitShipmentsTest
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
use SpApi\Model\vendor\shipments\v1\SubmitShipments;

/**
 * SubmitShipmentsTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the SubmitShipments operation.
 * @package     SpApi
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
