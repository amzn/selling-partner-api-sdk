<?php
/**
 * GetTrackingResponseTest
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
use SpApi\Model\shipping\v2\GetTrackingResponse;

/**
 * GetTrackingResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getTracking operation.
 * @package     SpApi
 */
class GetTrackingResponseTest extends TestCase
{

    private GetTrackingResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetTrackingResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetTrackingResponse"
     */
    public function testGetTrackingResponse()
    {
        $this->assertInstanceOf(GetTrackingResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\GetTrackingResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
