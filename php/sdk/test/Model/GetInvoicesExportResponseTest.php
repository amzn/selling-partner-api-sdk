<?php
/**
 * GetInvoicesExportResponseTest
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
use OpenAPI\Client\Model\invoices\GetInvoicesExportResponse;

/**
 * GetInvoicesExportResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\invoices\Export();
        
        $this->model->setExport($testValue);
        $this->assertEquals($testValue, $this->model->getExport());
    }
}
