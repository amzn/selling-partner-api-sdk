<?php
/**
 * ListPackingGroupBoxesResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ListPackingGroupBoxesResponse;

/**
 * ListPackingGroupBoxesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listPackingGroupBoxes&#x60; response.
 * @package     OpenAPI\Client
 */
class ListPackingGroupBoxesResponseTest extends TestCase
{

    private ListPackingGroupBoxesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListPackingGroupBoxesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListPackingGroupBoxesResponse"
     */
    public function testListPackingGroupBoxesResponse()
    {
        $this->assertInstanceOf(ListPackingGroupBoxesResponse::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinbound\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
