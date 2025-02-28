<?php
/**
 * BatchOffersResponseTest
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
use SpApi\Model\pricing\v0\BatchOffersResponse;

/**
 * BatchOffersResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Common schema that present in &#x60;ItemOffersResponse&#x60; and &#x60;ListingOffersResponse&#x60;
 * @package     SpApi
 */
class BatchOffersResponseTest extends TestCase
{

    private BatchOffersResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BatchOffersResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BatchOffersResponse"
     */
    public function testBatchOffersResponse()
    {
        $this->assertInstanceOf(BatchOffersResponse::class, $this->model);
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\HttpResponseHeaders();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\GetOffersHttpStatusLine();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\GetOffersResponse();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
