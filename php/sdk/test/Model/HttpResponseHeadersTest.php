<?php
/**
 * HttpResponseHeadersTest
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
use OpenAPI\Client\Model\pricing\v0\HttpResponseHeaders;

/**
 * HttpResponseHeadersTest Class Doc Comment
 *
 * @category    Class
 * @description A mapping of additional HTTP headers to send/receive for the individual batch request.
 * @package     OpenAPI\Client
 */
class HttpResponseHeadersTest extends TestCase
{

    private HttpResponseHeaders $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new HttpResponseHeaders();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "HttpResponseHeaders"
     */
    public function testHttpResponseHeaders()
    {
        $this->assertInstanceOf(HttpResponseHeaders::class, $this->model);
    }

    /**
     * Test attribute "date"
     */
    public function testPropertyDate()
    {
        $testValue = 'test';
        
        $this->model->setDate($testValue);
        $this->assertEquals($testValue, $this->model->getDate());
    }

    /**
     * Test attribute "x_amzn_request_id"
     */
    public function testPropertyXAmznRequestId()
    {
        $testValue = 'test';
        
        $this->model->setXAmznRequestId($testValue);
        $this->assertEquals($testValue, $this->model->getXAmznRequestId());
    }
}
