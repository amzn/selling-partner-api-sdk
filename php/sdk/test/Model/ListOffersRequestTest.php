<?php
/**
 * ListOffersRequestTest
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
use OpenAPI\Client\Model\replenishment\ListOffersRequest;

/**
 * ListOffersRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the &#x60;listOffers&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListOffersRequestTest extends TestCase
{

    private ListOffersRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersRequest"
     */
    public function testListOffersRequest()
    {
        $this->assertInstanceOf(ListOffersRequest::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\ListOffersRequestPagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "filters"
     */
    public function testPropertyFilters()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\ListOffersRequestFilters();
        
        $this->model->setFilters($testValue);
        $this->assertEquals($testValue, $this->model->getFilters());
    }

    /**
     * Test attribute "sort"
     */
    public function testPropertySort()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\ListOffersRequestSort();
        
        $this->model->setSort($testValue);
        $this->assertEquals($testValue, $this->model->getSort());
    }
}
