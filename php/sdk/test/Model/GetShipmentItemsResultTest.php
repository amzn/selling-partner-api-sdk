<?php
/**
 * GetShipmentItemsResultTest
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
use OpenAPI\Client\Model\fulfillmentinboundv0\GetShipmentItemsResult;

/**
 * GetShipmentItemsResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result for the get shipment items operation
 * @package     OpenAPI\Client
 */
class GetShipmentItemsResultTest extends TestCase
{

    private GetShipmentItemsResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetShipmentItemsResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetShipmentItemsResult"
     */
    public function testGetShipmentItemsResult()
    {
        $this->assertInstanceOf(GetShipmentItemsResult::class, $this->model);
    }

    /**
     * Test attribute "item_data"
     */
    public function testPropertyItemData()
    {
        $testValue = [];
        
        $this->model->setItemData($testValue);
        $this->assertEquals($testValue, $this->model->getItemData());
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
