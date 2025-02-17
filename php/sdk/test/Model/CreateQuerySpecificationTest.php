<?php
/**
 * CreateQuerySpecificationTest
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
use SpApi\Model\datakiosk\v2023_11_15\CreateQuerySpecification;

/**
 * CreateQuerySpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create the query.
 * @package     SpApi
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
