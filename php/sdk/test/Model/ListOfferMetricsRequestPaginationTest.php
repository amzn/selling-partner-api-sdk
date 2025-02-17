<?php
/**
 * ListOfferMetricsRequestPaginationTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsRequestPagination;

/**
 * ListOfferMetricsRequestPaginationTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to paginate through the response.
 * @package     SpApi
 */
class ListOfferMetricsRequestPaginationTest extends TestCase
{

    private ListOfferMetricsRequestPagination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsRequestPagination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsRequestPagination"
     */
    public function testListOfferMetricsRequestPagination()
    {
        $this->assertInstanceOf(ListOfferMetricsRequestPagination::class, $this->model);
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
