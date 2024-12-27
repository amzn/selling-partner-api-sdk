<?php
/**
 * ListTransportationOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ListTransportationOptionsResponse;

/**
 * ListTransportationOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listTransportationOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class ListTransportationOptionsResponseTest extends TestCase
{

    private ListTransportationOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListTransportationOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListTransportationOptionsResponse"
     */
    public function testListTransportationOptionsResponse()
    {
        $this->assertInstanceOf(ListTransportationOptionsResponse::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinbound\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "transportation_options"
     */
    public function testPropertyTransportationOptions()
    {
        $testValue = [];
        
        $this->model->setTransportationOptions($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationOptions());
    }
}
