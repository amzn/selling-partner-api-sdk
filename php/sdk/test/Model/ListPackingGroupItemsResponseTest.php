<?php
/**
 * ListPackingGroupItemsResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ListPackingGroupItemsResponse;

/**
 * ListPackingGroupItemsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listPackingGroupItems&#x60; response.
 * @package     OpenAPI\Client
 */
class ListPackingGroupItemsResponseTest extends TestCase
{

    private ListPackingGroupItemsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListPackingGroupItemsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListPackingGroupItemsResponse"
     */
    public function testListPackingGroupItemsResponse()
    {
        $this->assertInstanceOf(ListPackingGroupItemsResponse::class, $this->model);
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
