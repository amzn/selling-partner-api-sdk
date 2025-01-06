<?php
/**
 * ListInboundPlanBoxesResponseTest
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
use OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlanBoxesResponse;

/**
 * ListInboundPlanBoxesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listInboundPlanBoxes&#x60; response.
 * @package     OpenAPI\Client
 */
class ListInboundPlanBoxesResponseTest extends TestCase
{

    private ListInboundPlanBoxesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListInboundPlanBoxesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListInboundPlanBoxesResponse"
     */
    public function testListInboundPlanBoxesResponse()
    {
        $this->assertInstanceOf(ListInboundPlanBoxesResponse::class, $this->model);
    }

    /**
     * Test attribute "boxes"
     */
    public function testPropertyBoxes()
    {
        $testValue = [];
        
        $this->model->setBoxes($testValue);
        $this->assertEquals($testValue, $this->model->getBoxes());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
