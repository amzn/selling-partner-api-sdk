<?php
/**
 * GetMarketplaceParticipationsResponseTest
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
use SpApi\Model\sellers\v1\GetMarketplaceParticipationsResponse;

/**
 * GetMarketplaceParticipationsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getMarketplaceParticipations&#x60; operation.
 * @package     SpApi
 */
class GetMarketplaceParticipationsResponseTest extends TestCase
{

    private GetMarketplaceParticipationsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMarketplaceParticipationsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMarketplaceParticipationsResponse"
     */
    public function testGetMarketplaceParticipationsResponse()
    {
        $this->assertInstanceOf(GetMarketplaceParticipationsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        $testValue = [];
        
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
