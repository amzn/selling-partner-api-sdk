<?php
/**
 * ListShipmentBoxesResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ListShipmentBoxesResponse;

/**
 * ListShipmentBoxesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listShipmentBoxes&#x60; response.
 * @package     OpenAPI\Client
 */
class ListShipmentBoxesResponseTest extends TestCase
{

    private ListShipmentBoxesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListShipmentBoxesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListShipmentBoxesResponse"
     */
    public function testListShipmentBoxesResponse()
    {
        $this->assertInstanceOf(ListShipmentBoxesResponse::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
