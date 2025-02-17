<?php
/**
 * ReportTest
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
use SpApi\Model\reports\v2021_06_30\Report;

/**
 * ReportTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information about the report.
 * @package     SpApi
 */
class ReportTest extends TestCase
{

    private Report $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Report();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Report"
     */
    public function testReport()
    {
        $this->assertInstanceOf(Report::class, $this->model);
    }

    /**
     * Test attribute "marketplace_ids"
     */
    public function testPropertyMarketplaceIds()
    {
        $testValue = [];
        
        $this->model->setMarketplaceIds($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceIds());
    }

    /**
     * Test attribute "report_id"
     */
    public function testPropertyReportId()
    {
        $testValue = 'test';
        
        $this->model->setReportId($testValue);
        $this->assertEquals($testValue, $this->model->getReportId());
    }

    /**
     * Test attribute "report_type"
     */
    public function testPropertyReportType()
    {
        $testValue = 'test';
        
        $this->model->setReportType($testValue);
        $this->assertEquals($testValue, $this->model->getReportType());
    }

    /**
     * Test attribute "data_start_time"
     */
    public function testPropertyDataStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDataStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getDataStartTime());
    }

    /**
     * Test attribute "data_end_time"
     */
    public function testPropertyDataEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDataEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getDataEndTime());
    }

    /**
     * Test attribute "report_schedule_id"
     */
    public function testPropertyReportScheduleId()
    {
        $testValue = 'test';
        
        $this->model->setReportScheduleId($testValue);
        $this->assertEquals($testValue, $this->model->getReportScheduleId());
    }

    /**
     * Test attribute "created_time"
     */
    public function testPropertyCreatedTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreatedTime($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedTime());
    }

    /**
     * Test attribute "processing_status"
     */
    public function testPropertyProcessingStatus()
    {
        $enumInstance = new Report();
        $allowedValues = $enumInstance->getProcessingStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setProcessingStatus($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStatus());
    }

    /**
     * Test attribute "processing_start_time"
     */
    public function testPropertyProcessingStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setProcessingStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStartTime());
    }

    /**
     * Test attribute "processing_end_time"
     */
    public function testPropertyProcessingEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setProcessingEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingEndTime());
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
}
