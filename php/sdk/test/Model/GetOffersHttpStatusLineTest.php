<?php
/**
 * GetOffersHttpStatusLineTest
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
use OpenAPI\Client\Model\pricingv0\GetOffersHttpStatusLine;

/**
 * GetOffersHttpStatusLineTest Class Doc Comment
 *
 * @category    Class
 * @description The HTTP status line associated with the response.  For more information, consult [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html).
 * @package     OpenAPI\Client
 */
class GetOffersHttpStatusLineTest extends TestCase
{

    private GetOffersHttpStatusLine $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOffersHttpStatusLine();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOffersHttpStatusLine"
     */
    public function testGetOffersHttpStatusLine()
    {
        $this->assertInstanceOf(GetOffersHttpStatusLine::class, $this->model);
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
