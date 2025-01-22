<?php
/**
 * ListingOffersResponseTest
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
use OpenAPI\Client\Model\pricing\v0\ListingOffersResponse;

/**
 * ListingOffersResponseTest Class Doc Comment
 *
 * @category    Class
 * @description ListingOffersResponse
 * @package     OpenAPI\Client
 */
class ListingOffersResponseTest extends TestCase
{

    private ListingOffersResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListingOffersResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListingOffersResponse"
     */
    public function testListingOffersResponse()
    {
        $this->assertInstanceOf(ListingOffersResponse::class, $this->model);
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\HttpResponseHeaders();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\GetOffersHttpStatusLine();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\GetOffersResponse();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }

    /**
     * Test attribute "request"
     */
    public function testPropertyRequest()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\ListingOffersRequestParams();
        
        $this->model->setRequest($testValue);
        $this->assertEquals($testValue, $this->model->getRequest());
    }
}
