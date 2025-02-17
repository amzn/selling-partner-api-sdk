<?php
/**
 * GetInvoicesExportResponseTest
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
use SpApi\Model\invoices\v2024_06_19\GetInvoicesExportResponse;

/**
 * GetInvoicesExportResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     SpApi
 */
class GetInvoicesExportResponseTest extends TestCase
{

    private GetInvoicesExportResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoicesExportResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoicesExportResponse"
     */
    public function testGetInvoicesExportResponse()
    {
        $this->assertInstanceOf(GetInvoicesExportResponse::class, $this->model);
    }

    /**
     * Test attribute "export"
     */
    public function testPropertyExport()
    {
        
        $testValue = new \SpApi\Model\invoices\v2024_06_19\Export();
        
        $this->model->setExport($testValue);
        $this->assertEquals($testValue, $this->model->getExport());
    }
}
