<?php
/**
 * ExportTest
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
use SpApi\Model\invoices\v2024_06_19\Export;

/**
 * ExportTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information about the export.
 * @package     SpApi
 */
class ExportTest extends TestCase
{

    private Export $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Export();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Export"
     */
    public function testExport()
    {
        $this->assertInstanceOf(Export::class, $this->model);
    }

    /**
     * Test attribute "error_message"
     */
    public function testPropertyErrorMessage()
    {
        $testValue = 'test';
        
        $this->model->setErrorMessage($testValue);
        $this->assertEquals($testValue, $this->model->getErrorMessage());
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

    /**
     * Test attribute "generate_export_finished_at"
     */
    public function testPropertyGenerateExportFinishedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setGenerateExportFinishedAt($testValue);
        $this->assertEquals($testValue, $this->model->getGenerateExportFinishedAt());
    }

    /**
     * Test attribute "generate_export_started_at"
     */
    public function testPropertyGenerateExportStartedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setGenerateExportStartedAt($testValue);
        $this->assertEquals($testValue, $this->model->getGenerateExportStartedAt());
    }

    /**
     * Test attribute "invoices_document_ids"
     */
    public function testPropertyInvoicesDocumentIds()
    {
        $testValue = [];
        
        $this->model->setInvoicesDocumentIds($testValue);
        $this->assertEquals($testValue, $this->model->getInvoicesDocumentIds());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\invoices\v2024_06_19\ExportStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
