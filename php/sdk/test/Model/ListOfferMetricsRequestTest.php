<?php
/**
 * ListOfferMetricsRequestTest
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
use OpenAPI\Client\Model\replenishment\ListOfferMetricsRequest;

/**
 * ListOfferMetricsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the &#x60;listOfferMetrics&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListOfferMetricsRequestTest extends TestCase
{

    private ListOfferMetricsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsRequest"
     */
    public function testListOfferMetricsRequest()
    {
        $this->assertInstanceOf(ListOfferMetricsRequest::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\ListOfferMetricsRequestPagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "sort"
     */
    public function testPropertySort()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\ListOfferMetricsRequestSort();
        
        $this->model->setSort($testValue);
        $this->assertEquals($testValue, $this->model->getSort());
    }

    /**
     * Test attribute "filters"
     */
    public function testPropertyFilters()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\ListOfferMetricsRequestFilters();
        
        $this->model->setFilters($testValue);
        $this->assertEquals($testValue, $this->model->getFilters());
    }
}
