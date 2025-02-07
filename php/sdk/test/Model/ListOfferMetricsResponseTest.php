<?php
/**
 * ListOfferMetricsResponseTest
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
use OpenAPI\Client\Model\replenishment\v2022_11_07\ListOfferMetricsResponse;

/**
 * ListOfferMetricsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;listOfferMetrics&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListOfferMetricsResponseTest extends TestCase
{

    private ListOfferMetricsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsResponse"
     */
    public function testListOfferMetricsResponse()
    {
        $this->assertInstanceOf(ListOfferMetricsResponse::class, $this->model);
    }

    /**
     * Test attribute "offers"
     */
    public function testPropertyOffers()
    {
        $testValue = [];
        
        $this->model->setOffers($testValue);
        $this->assertEquals($testValue, $this->model->getOffers());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\v2022_11_07\PaginationResponse();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
