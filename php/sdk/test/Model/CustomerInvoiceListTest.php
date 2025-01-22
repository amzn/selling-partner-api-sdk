<?php
/**
 * CustomerInvoiceListTest
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
use OpenAPI\Client\Model\vendor\df\shipping\CustomerInvoiceList;

/**
 * CustomerInvoiceListTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a list of customer invoices, potentially paginated.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\shipping\Pagination();
        
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
