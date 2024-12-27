<?php
/**
 * ListDeliveryWindowOptionsResponseTest
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
use OpenAPI\Client\Model\fulfillmentinbound\ListDeliveryWindowOptionsResponse;

/**
 * ListDeliveryWindowOptionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;listDeliveryWindowOptions&#x60; response.
 * @package     OpenAPI\Client
 */
class ListDeliveryWindowOptionsResponseTest extends TestCase
{

    private ListDeliveryWindowOptionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListDeliveryWindowOptionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListDeliveryWindowOptionsResponse"
     */
    public function testListDeliveryWindowOptionsResponse()
    {
        $this->assertInstanceOf(ListDeliveryWindowOptionsResponse::class, $this->model);
    }

    /**
     * Test attribute "delivery_window_options"
     */
    public function testPropertyDeliveryWindowOptions()
    {
        $testValue = [];
        
        $this->model->setDeliveryWindowOptions($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindowOptions());
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
}
