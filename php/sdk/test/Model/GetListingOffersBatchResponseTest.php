<?php
/**
 * GetListingOffersBatchResponseTest
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
use SpApi\Model\pricing\v0\GetListingOffersBatchResponse;

/**
 * GetListingOffersBatchResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response associated with the &#x60;getListingOffersBatch&#x60; API call.
 * @package     SpApi
 */
class GetListingOffersBatchResponseTest extends TestCase
{

    private GetListingOffersBatchResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetListingOffersBatchResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetListingOffersBatchResponse"
     */
    public function testGetListingOffersBatchResponse()
    {
        $this->assertInstanceOf(GetListingOffersBatchResponse::class, $this->model);
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
