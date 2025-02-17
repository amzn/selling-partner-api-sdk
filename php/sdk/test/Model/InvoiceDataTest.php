<?php
/**
 * InvoiceDataTest
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
use SpApi\Model\easyship\v2022_03_23\InvoiceData;

/**
 * InvoiceDataTest Class Doc Comment
 *
 * @category    Class
 * @description Invoice number and date.
 * @package     SpApi
 */
class InvoiceDataTest extends TestCase
{

    private InvoiceData $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoiceData();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoiceData"
     */
    public function testInvoiceData()
    {
        $this->assertInstanceOf(InvoiceData::class, $this->model);
    }

    /**
     * Test attribute "invoice_number"
     */
    public function testPropertyInvoiceNumber()
    {
        $testValue = 'test';
        
        $this->model->setInvoiceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceNumber());
    }

    /**
     * Test attribute "invoice_date"
     */
    public function testPropertyInvoiceDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setInvoiceDate($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceDate());
    }
}
