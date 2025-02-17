<?php
/**
 * CustomerInvoiceListTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\CustomerInvoiceList;

/**
 * CustomerInvoiceListTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a list of customer invoices, potentially paginated.
 * @package     SpApi
 */
class CustomerInvoiceListTest extends TestCase
{

    private CustomerInvoiceList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CustomerInvoiceList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CustomerInvoiceList"
     */
    public function testCustomerInvoiceList()
    {
        $this->assertInstanceOf(CustomerInvoiceList::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "customer_invoices"
     */
    public function testPropertyCustomerInvoices()
    {
        $testValue = [];
        
        $this->model->setCustomerInvoices($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerInvoices());
    }
}
