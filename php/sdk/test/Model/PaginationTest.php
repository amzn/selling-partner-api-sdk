<?php
/**
 * PaginationTest
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
use OpenAPI\Client\Model\catalogItems\Pagination;

/**
 * PaginationTest Class Doc Comment
 *
 * @category    Class
 * @description When a request produces a response that exceeds the &#x60;pageSize&#x60;, pagination occurs. This means the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the &#x60;nextToken&#x60; value or the &#x60;previousToken&#x60; value as the &#x60;pageToken&#x60; parameter in the next request. When you receive the last page, there will be no &#x60;nextToken&#x60; key in the pagination object.
 * @package     OpenAPI\Client
 */
class PaginationTest extends TestCase
{

    private Pagination $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Pagination();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Pagination"
     */
    public function testPagination()
    {
        $this->assertInstanceOf(Pagination::class, $this->model);
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

    /**
     * Test attribute "previous_token"
     */
    public function testPropertyPreviousToken()
    {
        $testValue = 'test';
        
        $this->model->setPreviousToken($testValue);
        $this->assertEquals($testValue, $this->model->getPreviousToken());
    }
}
