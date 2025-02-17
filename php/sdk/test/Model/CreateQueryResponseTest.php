<?php
/**
 * CreateQueryResponseTest
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
use SpApi\Model\datakiosk\v2023_11_15\CreateQueryResponse;

/**
 * CreateQueryResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response for the &#x60;createQuery&#x60; operation.
 * @package     SpApi
 */
class CreateQueryResponseTest extends TestCase
{

    private CreateQueryResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateQueryResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateQueryResponse"
     */
    public function testCreateQueryResponse()
    {
        $this->assertInstanceOf(CreateQueryResponse::class, $this->model);
    }

    /**
     * Test attribute "query_id"
     */
    public function testPropertyQueryId()
    {
        $testValue = 'test';
        
        $this->model->setQueryId($testValue);
        $this->assertEquals($testValue, $this->model->getQueryId());
    }
}
