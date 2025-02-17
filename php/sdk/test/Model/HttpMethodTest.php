<?php
/**
 * HttpMethodTest
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
use SpApi\Model\pricing\v0\HttpMethod;

/**
 * HttpMethodTest Class Doc Comment
 *
 * @category    Class
 * @description The HTTP method associated with the individual APIs being called as part of the batch request.
 * @package     SpApi
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
