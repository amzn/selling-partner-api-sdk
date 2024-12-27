<?php
/**
 * FeaturedOfferExpectedPriceRequestTest
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
use OpenAPI\Client\Model\pricing\FeaturedOfferExpectedPriceRequest;

/**
 * FeaturedOfferExpectedPriceRequestTest Class Doc Comment
 *
 * @category    Class
 * @description An individual FOEP request for a particular SKU.
 * @package     OpenAPI\Client
 */
class FeaturedOfferExpectedPriceRequestTest extends TestCase
{

    private FeaturedOfferExpectedPriceRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferExpectedPriceRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferExpectedPriceRequest"
     */
    public function testFeaturedOfferExpectedPriceRequest()
    {
        $this->assertInstanceOf(FeaturedOfferExpectedPriceRequest::class, $this->model);
    }

    /**
     * Test attribute "uri"
     */
    public function testPropertyUri()
    {
        $testValue = 'test';
        
        $this->model->setUri($testValue);
        $this->assertEquals($testValue, $this->model->getUri());
    }

    /**
     * Test attribute "method"
     */
    public function testPropertyMethod()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricing\HttpMethod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setMethod($testValue);
        $this->assertEquals($testValue, $this->model->getMethod());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new array<string,object>();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
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
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }
}
