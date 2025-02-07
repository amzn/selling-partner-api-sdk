<?php
/**
 * ListOffersRequestPaginationTest
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
use OpenAPI\Client\Model\replenishment\v2022_11_07\ListOffersRequestPagination;

/**
 * ListOffersRequestPaginationTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to paginate through the response.
 * @package     OpenAPI\Client
 */
class ListOffersRequestPaginationTest extends TestCase
{

    private ListOffersRequestPagination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersRequestPagination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersRequestPagination"
     */
    public function testListOffersRequestPagination()
    {
        $this->assertInstanceOf(ListOffersRequestPagination::class, $this->model);
    }

    /**
     * Test attribute "limit"
     */
    public function testPropertyLimit()
    {
        
        $testValue = new int();
        
        $this->model->setLimit($testValue);
        $this->assertEquals($testValue, $this->model->getLimit());
    }

    /**
     * Test attribute "offset"
     */
    public function testPropertyOffset()
    {
        
        $testValue = new int();
        
        $this->model->setOffset($testValue);
        $this->assertEquals($testValue, $this->model->getOffset());
    }
}
