<?php
/**
 * ExportInvoicesResponseTest
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
use SpApi\Model\invoices\v2024_06_19\ExportInvoicesResponse;

/**
 * ExportInvoicesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     SpApi
 */
class ExportInvoicesResponseTest extends TestCase
{

    private ExportInvoicesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExportInvoicesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExportInvoicesResponse"
     */
    public function testExportInvoicesResponse()
    {
        $this->assertInstanceOf(ExportInvoicesResponse::class, $this->model);
    }

    /**
     * Test attribute "export_id"
     */
    public function testPropertyExportId()
    {
        $testValue = 'test';
        
        $this->model->setExportId($testValue);
        $this->assertEquals($testValue, $this->model->getExportId());
    }
}
