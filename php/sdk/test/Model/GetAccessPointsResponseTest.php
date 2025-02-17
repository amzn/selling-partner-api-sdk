<?php
/**
 * GetAccessPointsResponseTest
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
use SpApi\Model\shipping\v2\GetAccessPointsResponse;

/**
 * GetAccessPointsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the GetAccessPoints operation.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\shipping\v2\GetAccessPointsResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
