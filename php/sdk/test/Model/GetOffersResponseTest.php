<?php
/**
 * GetOffersResponseTest
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
use SpApi\Model\pricing\v0\GetOffersResponse;

/**
 * GetOffersResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getListingOffers&#x60; and &#x60;getItemOffers&#x60; operations.
 * @package     SpApi
 */
class GetOffersResponseTest extends TestCase
{

    private GetOffersResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOffersResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOffersResponse"
     */
    public function testGetOffersResponse()
    {
        $this->assertInstanceOf(GetOffersResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\GetOffersResult();
        
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
