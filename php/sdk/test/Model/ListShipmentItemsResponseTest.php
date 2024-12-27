<?php
/**
 * ListShipmentItemsResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ListShipmentItemsResponse;

/**
 * ListShipmentItemsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listShipmentItems&#x60; response.
 * @package     OpenAPI\Client
 */
class ListShipmentItemsResponseTest extends TestCase
{

    private ListShipmentItemsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListShipmentItemsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListShipmentItemsResponse"
     */
    public function testListShipmentItemsResponse()
    {
        $this->assertInstanceOf(ListShipmentItemsResponse::class, $this->model);
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinbound\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
