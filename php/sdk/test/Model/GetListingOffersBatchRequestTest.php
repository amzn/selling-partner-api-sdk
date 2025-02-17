<?php
/**
 * GetListingOffersBatchRequestTest
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
use SpApi\Model\pricing\v0\GetListingOffersBatchRequest;

/**
 * GetListingOffersBatchRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request associated with the &#x60;getListingOffersBatch&#x60; API call.
 * @package     SpApi
 */
class GetListingOffersBatchRequestTest extends TestCase
{

    private GetListingOffersBatchRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetListingOffersBatchRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetListingOffersBatchRequest"
     */
    public function testGetListingOffersBatchRequest()
    {
        $this->assertInstanceOf(GetListingOffersBatchRequest::class, $this->model);
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
