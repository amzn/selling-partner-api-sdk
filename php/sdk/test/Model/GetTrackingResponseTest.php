<?php
/**
 * GetTrackingResponseTest
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
use OpenAPI\Client\Model\shipping\GetTrackingResponse;

/**
 * GetTrackingResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getTracking operation.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\shipping\GetTrackingResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
