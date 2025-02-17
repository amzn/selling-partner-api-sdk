<?php
/**
 * GetQueriesResponsePaginationTest
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
use SpApi\Model\datakiosk\v2023_11_15\GetQueriesResponsePagination;

/**
 * GetQueriesResponsePaginationTest Class Doc Comment
 *
 * @category    Class
 * @description When a request has results that are not included in this response, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass the &#x60;nextToken&#x60; as the &#x60;paginationToken&#x60; query parameter in the subsequent &#x60;getQueries&#x60; request. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of &#x60;pageSize&#x60; which can be modified between calls to &#x60;getQueries&#x60;. When there are no more pages to fetch, the &#x60;nextToken&#x60; field will be absent.
 * @package     SpApi
 */
class GetQueriesResponsePaginationTest extends TestCase
{

    private GetQueriesResponsePagination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetQueriesResponsePagination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetQueriesResponsePagination"
     */
    public function testGetQueriesResponsePagination()
    {
        $this->assertInstanceOf(GetQueriesResponsePagination::class, $this->model);
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }
}
