<?php
/**
 * HttpMethodTest
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
use OpenAPI\Client\Model\pricing\HttpMethod;

/**
 * HttpMethodTest Class Doc Comment
 *
 * @category    Class
 * @description The HTTP method associated with an individual request within a batch.
 * @package     OpenAPI\Client
 */
class HttpMethodTest extends TestCase
{

    private HttpMethod $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new HttpMethod();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "HttpMethod"
     */
    public function testHttpMethod()
    {
        $this->assertInstanceOf(HttpMethod::class, $this->model);
    }
}
