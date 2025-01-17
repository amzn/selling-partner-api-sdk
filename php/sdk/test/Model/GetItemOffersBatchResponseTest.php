<?php
/**
 * GetItemOffersBatchResponseTest
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
use OpenAPI\Client\Model\pricing\v0\GetItemOffersBatchResponse;

/**
 * GetItemOffersBatchResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response associated with the &#x60;getItemOffersBatch&#x60; API call.
 * @package     OpenAPI\Client
 */
class GetItemOffersBatchResponseTest extends TestCase
{

    private GetItemOffersBatchResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetItemOffersBatchResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetItemOffersBatchResponse"
     */
    public function testGetItemOffersBatchResponse()
    {
        $this->assertInstanceOf(GetItemOffersBatchResponse::class, $this->model);
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
