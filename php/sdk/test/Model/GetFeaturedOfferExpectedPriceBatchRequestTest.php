<?php
/**
 * GetFeaturedOfferExpectedPriceBatchRequestTest
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
use SpApi\Model\pricing\v2022_05_01\GetFeaturedOfferExpectedPriceBatchRequest;

/**
 * GetFeaturedOfferExpectedPriceBatchRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the &#x60;getFeaturedOfferExpectedPriceBatch&#x60; operation.
 * @package     SpApi
 */
class GetFeaturedOfferExpectedPriceBatchRequestTest extends TestCase
{

    private GetFeaturedOfferExpectedPriceBatchRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeaturedOfferExpectedPriceBatchRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeaturedOfferExpectedPriceBatchRequest"
     */
    public function testGetFeaturedOfferExpectedPriceBatchRequest()
    {
        $this->assertInstanceOf(GetFeaturedOfferExpectedPriceBatchRequest::class, $this->model);
    }

    /**
     * Test attribute "requests"
     */
    public function testPropertyRequests()
    {
        $testValue = [];
        
        $this->model->setRequests($testValue);
        $this->assertEquals($testValue, $this->model->getRequests());
    }
}
