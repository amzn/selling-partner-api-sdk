<?php
/**
 * BatchResponseTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\BatchResponse;

/**
 * BatchResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The common properties for responses to individual requests within a batch.
 * @package     OpenAPI\Client
 */
class BatchResponseTest extends TestCase
{

    private BatchResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BatchResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BatchResponse"
     */
    public function testBatchResponse()
    {
        $this->assertInstanceOf(BatchResponse::class, $this->model);
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        $testValue = array();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\HttpStatusLine();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
