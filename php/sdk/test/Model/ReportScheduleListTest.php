<?php
/**
 * ReportScheduleListTest
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
use OpenAPI\Client\Model\reports\ReportScheduleList;

/**
 * ReportScheduleListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of report schedules.
 * @package     OpenAPI\Client
 */
class ReportScheduleListTest extends TestCase
{

    private ReportScheduleList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReportScheduleList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReportScheduleList"
     */
    public function testReportScheduleList()
    {
        $this->assertInstanceOf(ReportScheduleList::class, $this->model);
    }

    /**
     * Test attribute "report_schedules"
     */
    public function testPropertyReportSchedules()
    {
        $testValue = [];
        
        $this->model->setReportSchedules($testValue);
        $this->assertEquals($testValue, $this->model->getReportSchedules());
    }
}
