<?php
/**
 * ListOffersResponseTest
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
use OpenAPI\Client\Model\replenishment\ListOffersResponse;

/**
 * ListOffersResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;listOffers&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListOffersResponseTest extends TestCase
{

    private ListOffersResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersResponse"
     */
    public function testListOffersResponse()
    {
        $this->assertInstanceOf(ListOffersResponse::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\replenishment\PaginationResponse();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
