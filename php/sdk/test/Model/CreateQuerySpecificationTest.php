<?php
/**
 * CreateQuerySpecificationTest
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
use OpenAPI\Client\Model\datakiosk\CreateQuerySpecification;

/**
 * CreateQuerySpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create the query.
 * @package     OpenAPI\Client
 */
class CreateQuerySpecificationTest extends TestCase
{

    private CreateQuerySpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateQuerySpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateQuerySpecification"
     */
    public function testCreateQuerySpecification()
    {
        $this->assertInstanceOf(CreateQuerySpecification::class, $this->model);
    }

    /**
     * Test attribute "query"
     */
    public function testPropertyQuery()
    {
        $testValue = 'test';
        
        $this->model->setQuery($testValue);
        $this->assertEquals($testValue, $this->model->getQuery());
    }

    /**
     * Test attribute "pagination_token"
     */
    public function testPropertyPaginationToken()
    {
        $testValue = 'test';
        
        $this->model->setPaginationToken($testValue);
        $this->assertEquals($testValue, $this->model->getPaginationToken());
    }
}
