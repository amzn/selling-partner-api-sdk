<?php
/**
 * ReportScheduleTest
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
use OpenAPI\Client\Model\reports\ReportSchedule;

/**
 * ReportScheduleTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information about a report schedule.
 * @package     OpenAPI\Client
 */
class ReportScheduleTest extends TestCase
{

    private ReportSchedule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReportSchedule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReportSchedule"
     */
    public function testReportSchedule()
    {
        $this->assertInstanceOf(ReportSchedule::class, $this->model);
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
     * Test attribute "report_type"
     */
    public function testPropertyReportType()
    {
        $testValue = 'test';
        
        $this->model->setReportType($testValue);
        $this->assertEquals($testValue, $this->model->getReportType());
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
     * Test attribute "report_options"
     */
    public function testPropertyReportOptions()
    {
        
        $testValue = new array<string,string>();
        
        $this->model->setReportOptions($testValue);
        $this->assertEquals($testValue, $this->model->getReportOptions());
    }

    /**
     * Test attribute "period"
     */
    public function testPropertyPeriod()
    {
        $testValue = 'test';
        
        $this->model->setPeriod($testValue);
        $this->assertEquals($testValue, $this->model->getPeriod());
    }

    /**
     * Test attribute "next_report_creation_time"
     */
    public function testPropertyNextReportCreationTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setNextReportCreationTime($testValue);
        $this->assertEquals($testValue, $this->model->getNextReportCreationTime());
    }
}
