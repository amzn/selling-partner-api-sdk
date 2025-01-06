<?php
/**
 * OrderedQuantityDetailsTest
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
use OpenAPI\Client\Model\vendorOrders\OrderedQuantityDetails;

/**
 * OrderedQuantityDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of item quantity ordered.
 * @package     OpenAPI\Client
 */
class OrderedQuantityDetailsTest extends TestCase
{

    private OrderedQuantityDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderedQuantityDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderedQuantityDetails"
     */
    public function testOrderedQuantityDetails()
    {
        $this->assertInstanceOf(OrderedQuantityDetails::class, $this->model);
    }

    /**
     * Test attribute "updated_date"
     */
    public function testPropertyUpdatedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setUpdatedDate($testValue);
        $this->assertEquals($testValue, $this->model->getUpdatedDate());
    }

    /**
     * Test attribute "ordered_quantity"
     */
    public function testPropertyOrderedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorOrders\ItemQuantity();
        
        $this->model->setOrderedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getOrderedQuantity());
    }

    /**
     * Test attribute "cancelled_quantity"
     */
    public function testPropertyCancelledQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorOrders\ItemQuantity();
        
        $this->model->setCancelledQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getCancelledQuantity());
    }
}
