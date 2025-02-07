<?php
/**
 * GetQueriesResponseTest
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
use OpenAPI\Client\Model\datakiosk\v2023_11_15\GetQueriesResponse;

/**
 * GetQueriesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response for the &#x60;getQueries&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetQueriesResponseTest extends TestCase
{

    private GetQueriesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetQueriesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetQueriesResponse"
     */
    public function testGetQueriesResponse()
    {
        $this->assertInstanceOf(GetQueriesResponse::class, $this->model);
    }

    /**
     * Test attribute "queries"
     */
    public function testPropertyQueries()
    {
        $testValue = [];
        
        $this->model->setQueries($testValue);
        $this->assertEquals($testValue, $this->model->getQueries());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\datakiosk\v2023_11_15\GetQueriesResponsePagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
