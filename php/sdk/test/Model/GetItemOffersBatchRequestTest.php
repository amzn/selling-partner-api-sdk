<?php
/**
 * GetItemOffersBatchRequestTest
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
use OpenAPI\Client\Model\pricingv0\GetItemOffersBatchRequest;

/**
 * GetItemOffersBatchRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request associated with the &#x60;getItemOffersBatch&#x60; API call.
 * @package     OpenAPI\Client
 */
class GetItemOffersBatchRequestTest extends TestCase
{

    private GetItemOffersBatchRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetItemOffersBatchRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetItemOffersBatchRequest"
     */
    public function testGetItemOffersBatchRequest()
    {
        $this->assertInstanceOf(GetItemOffersBatchRequest::class, $this->model);
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
