<?php
/**
 * ReportDocumentTest
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
use SpApi\Model\reports\v2021_06_30\ReportDocument;

/**
 * ReportDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description Information required for the report document.
 * @package     SpApi
 */
class ReportDocumentTest extends TestCase
{

    private ReportDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReportDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReportDocument"
     */
    public function testReportDocument()
    {
        $this->assertInstanceOf(ReportDocument::class, $this->model);
    }

    /**
     * Test attribute "report_document_id"
     */
    public function testPropertyReportDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setReportDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getReportDocumentId());
    }

    /**
     * Test attribute "url"
     */
    public function testPropertyUrl()
    {
        $testValue = 'test';
        
        $this->model->setUrl($testValue);
        $this->assertEquals($testValue, $this->model->getUrl());
    }

    /**
     * Test attribute "compression_algorithm"
     */
    public function testPropertyCompressionAlgorithm()
    {
        $enumInstance = new ReportDocument();
        $allowedValues = $enumInstance->getCompressionAlgorithmAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setCompressionAlgorithm($testValue);
        $this->assertEquals($testValue, $this->model->getCompressionAlgorithm());
    }
}
