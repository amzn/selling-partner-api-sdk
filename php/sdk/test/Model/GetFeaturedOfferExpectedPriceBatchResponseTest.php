<?php
/**
 * GetFeaturedOfferExpectedPriceBatchResponseTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\GetFeaturedOfferExpectedPriceBatchResponse;

/**
 * GetFeaturedOfferExpectedPriceBatchResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getFeaturedOfferExpectedPriceBatch&#x60; operation.
 * @package     OpenAPI\Client
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
