<?php
/**
 * GetPaymentMethodsResponseTest
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
use OpenAPI\Client\Model\transfers\v2024_06_01\GetPaymentMethodsResponse;

/**
 * GetPaymentMethodsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getPaymentMethods&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetPaymentMethodsResponseTest extends TestCase
{

    private GetPaymentMethodsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPaymentMethodsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPaymentMethodsResponse"
     */
    public function testGetPaymentMethodsResponse()
    {
        $this->assertInstanceOf(GetPaymentMethodsResponse::class, $this->model);
    }

    /**
     * Test attribute "payment_methods"
     */
    public function testPropertyPaymentMethods()
    {
        $testValue = [];
        
        $this->model->setPaymentMethods($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentMethods());
    }
}
