<?php
/**
 * FeaturedOfferExpectedPriceResponseTest
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
use SpApi\Model\pricing\v2022_05_01\FeaturedOfferExpectedPriceResponse;

/**
 * FeaturedOfferExpectedPriceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for an individual FOEP response.
 * @package     SpApi
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
        $testValue = array();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\HttpStatusLine();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "request"
     */
    public function testPropertyRequest()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\FeaturedOfferExpectedPriceRequestParams();
        
        $this->model->setRequest($testValue);
        $this->assertEquals($testValue, $this->model->getRequest());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\FeaturedOfferExpectedPriceResponseBody();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
