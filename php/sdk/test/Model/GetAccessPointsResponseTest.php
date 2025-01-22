<?php
/**
 * GetAccessPointsResponseTest
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
use OpenAPI\Client\Model\shipping\GetAccessPointsResponse;

/**
 * GetAccessPointsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the GetAccessPoints operation.
 * @package     OpenAPI\Client
 */
class GetAccessPointsResponseTest extends TestCase
{

    private GetAccessPointsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAccessPointsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAccessPointsResponse"
     */
    public function testGetAccessPointsResponse()
    {
        $this->assertInstanceOf(GetAccessPointsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\GetAccessPointsResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
