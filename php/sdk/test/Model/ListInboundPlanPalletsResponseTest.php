<?php
/**
 * ListInboundPlanPalletsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ListInboundPlanPalletsResponse;

/**
 * ListInboundPlanPalletsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listInboundPlanPallets&#x60; response.
 * @package     OpenAPI\Client
 */
class ListInboundPlanPalletsResponseTest extends TestCase
{

    private ListInboundPlanPalletsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListInboundPlanPalletsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListInboundPlanPalletsResponse"
     */
    public function testListInboundPlanPalletsResponse()
    {
        $this->assertInstanceOf(ListInboundPlanPalletsResponse::class, $this->model);
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
