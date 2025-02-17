<?php
/**
 * ReservedQuantityTest
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
use SpApi\Model\fba\inventory\v1\ReservedQuantity;

/**
 * ReservedQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description The quantity of reserved inventory.
 * @package     SpApi
 */
class ReservedQuantityTest extends TestCase
{

    private ReservedQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReservedQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReservedQuantity"
     */
    public function testReservedQuantity()
    {
        $this->assertInstanceOf(ReservedQuantity::class, $this->model);
    }

    /**
     * Test attribute "total_reserved_quantity"
     */
    public function testPropertyTotalReservedQuantity()
    {
        $testValue = 123;
        
        $this->model->setTotalReservedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getTotalReservedQuantity());
    }

    /**
     * Test attribute "pending_customer_order_quantity"
     */
    public function testPropertyPendingCustomerOrderQuantity()
    {
        $testValue = 123;
        
        $this->model->setPendingCustomerOrderQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getPendingCustomerOrderQuantity());
    }

    /**
     * Test attribute "pending_transshipment_quantity"
     */
    public function testPropertyPendingTransshipmentQuantity()
    {
        $testValue = 123;
        
        $this->model->setPendingTransshipmentQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getPendingTransshipmentQuantity());
    }

    /**
     * Test attribute "fc_processing_quantity"
     */
    public function testPropertyFcProcessingQuantity()
    {
        $testValue = 123;
        
        $this->model->setFcProcessingQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getFcProcessingQuantity());
    }
}
