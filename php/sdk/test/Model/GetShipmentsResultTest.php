<?php
/**
 * GetShipmentsResultTest
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
use SpApi\Model\fulfillment\inbound\v0\GetShipmentsResult;

/**
 * GetShipmentsResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the get shipments operation
 * @package     SpApi
 */
class GetShipmentsResultTest extends TestCase
{

    private GetShipmentsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentsResult"
     */
    public function testGetShipmentsResult()
    {
        $this->assertInstanceOf(GetShipmentsResult::class, $this->model);
    }

    /**
     * Test attribute "shipment_data"
     */
    public function testPropertyShipmentData()
    {
        $testValue = [];
        
        $this->model->setShipmentData($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentData());
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }
}
