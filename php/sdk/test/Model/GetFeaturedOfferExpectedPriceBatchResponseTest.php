<?php
/**
 * GetFeaturedOfferExpectedPriceBatchResponseTest
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
use SpApi\Model\pricing\v2022_05_01\GetFeaturedOfferExpectedPriceBatchResponse;

/**
 * GetFeaturedOfferExpectedPriceBatchResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getFeaturedOfferExpectedPriceBatch&#x60; operation.
 * @package     SpApi
 */
class GetFeaturedOfferExpectedPriceBatchResponseTest extends TestCase
{

    private GetFeaturedOfferExpectedPriceBatchResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeaturedOfferExpectedPriceBatchResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeaturedOfferExpectedPriceBatchResponse"
     */
    public function testGetFeaturedOfferExpectedPriceBatchResponse()
    {
        $this->assertInstanceOf(GetFeaturedOfferExpectedPriceBatchResponse::class, $this->model);
    }

    /**
     * Test attribute "responses"
     */
    public function testPropertyResponses()
    {
        $testValue = [];
        
        $this->model->setResponses($testValue);
        $this->assertEquals($testValue, $this->model->getResponses());
    }
}
