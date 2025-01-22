<?php
/**
 * GetAdditionalSellerInputsRequestTest
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
use OpenAPI\Client\Model\merchantFulfillment\GetAdditionalSellerInputsRequest;

/**
 * GetAdditionalSellerInputsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request schema.
 * @package     OpenAPI\Client
 */
class GetAdditionalSellerInputsRequestTest extends TestCase
{

    private GetAdditionalSellerInputsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAdditionalSellerInputsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAdditionalSellerInputsRequest"
     */
    public function testGetAdditionalSellerInputsRequest()
    {
        $this->assertInstanceOf(GetAdditionalSellerInputsRequest::class, $this->model);
    }

    /**
     * Test attribute "shipping_service_id"
     */
    public function testPropertyShippingServiceId()
    {
        $testValue = 'test';
        
        $this->model->setShippingServiceId($testValue);
        $this->assertEquals($testValue, $this->model->getShippingServiceId());
    }

    /**
     * Test attribute "ship_from_address"
     */
    public function testPropertyShipFromAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
    }

    /**
     * Test attribute "order_id"
     */
    public function testPropertyOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderId());
    }
}
