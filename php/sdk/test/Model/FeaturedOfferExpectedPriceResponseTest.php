<?php
/**
 * FeaturedOfferExpectedPriceResponseTest
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
use OpenAPI\Client\Model\pricing\v2022-05-01\FeaturedOfferExpectedPriceResponse;

/**
 * FeaturedOfferExpectedPriceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for an individual FOEP response.
 * @package     OpenAPI\Client
 */
class FeaturedOfferExpectedPriceResponseTest extends TestCase
{

    private FeaturedOfferExpectedPriceResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferExpectedPriceResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferExpectedPriceResponse"
     */
    public function testFeaturedOfferExpectedPriceResponse()
    {
        $this->assertInstanceOf(FeaturedOfferExpectedPriceResponse::class, $this->model);
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        
        $testValue = new array<string,string>();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022-05-01\HttpStatusLine();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "request"
     */
    public function testPropertyRequest()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022-05-01\FeaturedOfferExpectedPriceRequestParams();
        
        $this->model->setRequest($testValue);
        $this->assertEquals($testValue, $this->model->getRequest());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022-05-01\FeaturedOfferExpectedPriceResponseBody();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
