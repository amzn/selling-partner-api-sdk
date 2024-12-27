<?php
/**
 * ListPlacementOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ListPlacementOptionsResponse;

/**
 * ListPlacementOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listPlacementOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class ListPlacementOptionsResponseTest extends TestCase
{

    private ListPlacementOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListPlacementOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListPlacementOptionsResponse"
     */
    public function testListPlacementOptionsResponse()
    {
        $this->assertInstanceOf(ListPlacementOptionsResponse::class, $this->model);
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

    /**
     * Test attribute "placement_options"
     */
    public function testPropertyPlacementOptions()
    {
        $testValue = [];
        
        $this->model->setPlacementOptions($testValue);
        $this->assertEquals($testValue, $this->model->getPlacementOptions());
    }
}
