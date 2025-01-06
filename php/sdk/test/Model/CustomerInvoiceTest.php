<?php
/**
 * CustomerInvoiceTest
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
use OpenAPI\Client\Model\vendorDfShipping\CustomerInvoice;

/**
 * CustomerInvoiceTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a customer invoice associated with a purchase order.
 * @package     OpenAPI\Client
 */
class CustomerInvoiceTest extends TestCase
{

    private CustomerInvoice $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CustomerInvoice();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CustomerInvoice"
     */
    public function testCustomerInvoice()
    {
        $this->assertInstanceOf(CustomerInvoice::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "content"
     */
    public function testPropertyContent()
    {
        $testValue = 'test';
        
        $this->model->setContent($testValue);
        $this->assertEquals($testValue, $this->model->getContent());
    }
}
