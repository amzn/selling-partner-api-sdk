<?php
/**
 * GetUnmanifestedShipmentsRequestTest
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
use OpenAPI\Client\Model\shipping\GetUnmanifestedShipmentsRequest;

/**
 * GetUnmanifestedShipmentsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the GetUnmanifestedShipmentsRequest operation.
 * @package     OpenAPI\Client
 */
class GetUnmanifestedShipmentsRequestTest extends TestCase
{

    private GetUnmanifestedShipmentsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetUnmanifestedShipmentsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetUnmanifestedShipmentsRequest"
     */
    public function testGetUnmanifestedShipmentsRequest()
    {
        $this->assertInstanceOf(GetUnmanifestedShipmentsRequest::class, $this->model);
    }

    /**
     * Test attribute "client_reference_details"
     */
    public function testPropertyClientReferenceDetails()
    {
        $testValue = [];
        
        $this->model->setClientReferenceDetails($testValue);
        $this->assertEquals($testValue, $this->model->getClientReferenceDetails());
    }
}
