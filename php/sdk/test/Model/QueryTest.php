<?php
/**
 * QueryTest
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
use SpApi\Model\datakiosk\v2023_11_15\Query;

/**
 * QueryTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information about the query.
 * @package     SpApi
 */
class QueryTest extends TestCase
{

    private Query $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Query();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Query"
     */
    public function testQuery()
    {
        $this->assertInstanceOf(Query::class, $this->model);
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
     * Test attribute "created_time"
     */
    public function testPropertyCreatedTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreatedTime($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedTime());
    }

    /**
     * Test attribute "processing_status"
     */
    public function testPropertyProcessingStatus()
    {
        $enumInstance = new Query();
        $allowedValues = $enumInstance->getProcessingStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setProcessingStatus($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStatus());
    }

    /**
     * Test attribute "processing_start_time"
     */
    public function testPropertyProcessingStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setProcessingStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStartTime());
    }

    /**
     * Test attribute "processing_end_time"
     */
    public function testPropertyProcessingEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setProcessingEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingEndTime());
    }

    /**
     * Test attribute "data_document_id"
     */
    public function testPropertyDataDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setDataDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getDataDocumentId());
    }

    /**
     * Test attribute "error_document_id"
     */
    public function testPropertyErrorDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setErrorDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getErrorDocumentId());
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\datakiosk\v2023_11_15\QueryPagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }
}
