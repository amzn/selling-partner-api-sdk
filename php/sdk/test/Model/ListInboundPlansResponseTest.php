<?php
/**
 * ListInboundPlansResponseTest
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
use OpenAPI\Client\Model\fulfillmentInbound\ListInboundPlansResponse;

/**
 * ListInboundPlansResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listInboundPlans&#x60; response.
 * @package     OpenAPI\Client
 */
class ListInboundPlansResponseTest extends TestCase
{

    private ListInboundPlansResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListInboundPlansResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListInboundPlansResponse"
     */
    public function testListInboundPlansResponse()
    {
        $this->assertInstanceOf(ListInboundPlansResponse::class, $this->model);
    }

    /**
     * Test attribute "inbound_plans"
     */
    public function testPropertyInboundPlans()
    {
        $testValue = [];
        
        $this->model->setInboundPlans($testValue);
        $this->assertEquals($testValue, $this->model->getInboundPlans());
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
