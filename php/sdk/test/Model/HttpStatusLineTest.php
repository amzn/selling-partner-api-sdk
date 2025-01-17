<?php
/**
 * HttpStatusLineTest
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
use OpenAPI\Client\Model\pricing\v2022-05-01\HttpStatusLine;

/**
 * HttpStatusLineTest Class Doc Comment
 *
 * @category    Class
 * @description The HTTP status line associated with the response for an individual request within a batch. For more information, refer to [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).
 * @package     OpenAPI\Client
 */
class HttpStatusLineTest extends TestCase
{

    private HttpStatusLine $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new HttpStatusLine();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "HttpStatusLine"
     */
    public function testHttpStatusLine()
    {
        $this->assertInstanceOf(HttpStatusLine::class, $this->model);
    }

    /**
     * Test attribute "status_code"
     */
    public function testPropertyStatusCode()
    {
        $testValue = 123;
        
        $this->model->setStatusCode($testValue);
        $this->assertEquals($testValue, $this->model->getStatusCode());
    }

    /**
     * Test attribute "reason_phrase"
     */
    public function testPropertyReasonPhrase()
    {
        $testValue = 'test';
        
        $this->model->setReasonPhrase($testValue);
        $this->assertEquals($testValue, $this->model->getReasonPhrase());
    }
}
