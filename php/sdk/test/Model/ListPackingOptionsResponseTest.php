<?php
/**
 * ListPackingOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillmentInbound\ListPackingOptionsResponse;

/**
 * ListPackingOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listPlacementOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class ListPackingOptionsResponseTest extends TestCase
{

    private ListPackingOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListPackingOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListPackingOptionsResponse"
     */
    public function testListPackingOptionsResponse()
    {
        $this->assertInstanceOf(ListPackingOptionsResponse::class, $this->model);
    }

    /**
     * Test attribute "packing_options"
     */
    public function testPropertyPackingOptions()
    {
        $testValue = [];
        
        $this->model->setPackingOptions($testValue);
        $this->assertEquals($testValue, $this->model->getPackingOptions());
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
