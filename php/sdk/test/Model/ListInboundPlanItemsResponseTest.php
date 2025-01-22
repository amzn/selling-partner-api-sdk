<?php
/**
 * ListInboundPlanItemsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ListInboundPlanItemsResponse;

/**
 * ListInboundPlanItemsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listInboundPlanItems&#x60; response.
 * @package     OpenAPI\Client
 */
class ListInboundPlanItemsResponseTest extends TestCase
{

    private ListInboundPlanItemsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListInboundPlanItemsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListInboundPlanItemsResponse"
     */
    public function testListInboundPlanItemsResponse()
    {
        $this->assertInstanceOf(ListInboundPlanItemsResponse::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
