<?php
/**
 * GetRatesResponseTest
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
use OpenAPI\Client\Model\shipping\v2\GetRatesResponse;

/**
 * GetRatesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getRates operation.
 * @package     OpenAPI\Client
 */
class GetRatesResponseTest extends TestCase
{

    private GetRatesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetRatesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetRatesResponse"
     */
    public function testGetRatesResponse()
    {
        $this->assertInstanceOf(GetRatesResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\v2\GetRatesResult();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }
}
