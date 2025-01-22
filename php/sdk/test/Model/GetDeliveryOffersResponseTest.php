<?php
/**
 * GetDeliveryOffersResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillment\outbound\GetDeliveryOffersResponse;

/**
 * GetDeliveryOffersResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getDeliveryOffers operation.
 * @package     OpenAPI\Client
 */
class GetDeliveryOffersResponseTest extends TestCase
{

    private GetDeliveryOffersResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetDeliveryOffersResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetDeliveryOffersResponse"
     */
    public function testGetDeliveryOffersResponse()
    {
        $this->assertInstanceOf(GetDeliveryOffersResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\GetDeliveryOffersResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
