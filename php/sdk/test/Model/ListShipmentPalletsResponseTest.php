<?php
/**
 * ListShipmentPalletsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ListShipmentPalletsResponse;

/**
 * ListShipmentPalletsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listShipmentPallets&#x60; response.
 * @package     OpenAPI\Client
 */
class ListShipmentPalletsResponseTest extends TestCase
{

    private ListShipmentPalletsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListShipmentPalletsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListShipmentPalletsResponse"
     */
    public function testListShipmentPalletsResponse()
    {
        $this->assertInstanceOf(ListShipmentPalletsResponse::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "pallets"
     */
    public function testPropertyPallets()
    {
        $testValue = [];
        
        $this->model->setPallets($testValue);
        $this->assertEquals($testValue, $this->model->getPallets());
    }
}
