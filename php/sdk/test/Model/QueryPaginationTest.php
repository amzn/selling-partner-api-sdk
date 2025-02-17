<?php
/**
 * QueryPaginationTest
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
use SpApi\Model\datakiosk\v2023_11_15\QueryPagination;

/**
 * QueryPaginationTest Class Doc Comment
 *
 * @category    Class
 * @description When a query produces results that are not included in the data document, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass a &#x60;CreateQuerySpecification&#x60; object with &#x60;paginationToken&#x60; set to this object&#39;s &#x60;nextToken&#x60; and with &#x60;query&#x60; set to this object&#39;s &#x60;query&#x60; in the subsequent &#x60;createQuery&#x60; request. When there are no more pages to fetch, the &#x60;nextToken&#x60; field will be absent.
 * @package     SpApi
 */
class QueryPaginationTest extends TestCase
{

    private QueryPagination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new QueryPagination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "QueryPagination"
     */
    public function testQueryPagination()
    {
        $this->assertInstanceOf(QueryPagination::class, $this->model);
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
