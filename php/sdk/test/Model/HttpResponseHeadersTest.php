<?php
/**
 * HttpResponseHeadersTest
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
use SpApi\Model\pricing\v0\HttpResponseHeaders;

/**
 * HttpResponseHeadersTest Class Doc Comment
 *
 * @category    Class
 * @description A mapping of additional HTTP headers to send/receive for the individual batch request.
 * @package     SpApi
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
