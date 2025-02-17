<?php
/**
 * SetPrepDetailsRequestTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SetPrepDetailsRequest;

/**
 * SetPrepDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;setPrepDetails&#x60; request.
 * @package     SpApi
 */
class SetPrepDetailsRequestTest extends TestCase
{

    private SetPrepDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SetPrepDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SetPrepDetailsRequest"
     */
    public function testSetPrepDetailsRequest()
    {
        $this->assertInstanceOf(SetPrepDetailsRequest::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "msku_prep_details"
     */
    public function testPropertyMskuPrepDetails()
    {
        $testValue = [];
        
        $this->model->setMskuPrepDetails($testValue);
        $this->assertEquals($testValue, $this->model->getMskuPrepDetails());
    }
}
