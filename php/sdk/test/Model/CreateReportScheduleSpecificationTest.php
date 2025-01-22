<?php
/**
 * CreateReportScheduleSpecificationTest
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
use OpenAPI\Client\Model\reports\CreateReportScheduleSpecification;

/**
 * CreateReportScheduleSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create the report schedule.
 * @package     OpenAPI\Client
 */
class CreateReportScheduleSpecificationTest extends TestCase
{

    private CreateReportScheduleSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateReportScheduleSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateReportScheduleSpecification"
     */
    public function testCreateReportScheduleSpecification()
    {
        $this->assertInstanceOf(CreateReportScheduleSpecification::class, $this->model);
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
        $testValue = array();
        
        $this->model->setReportOptions($testValue);
        $this->assertEquals($testValue, $this->model->getReportOptions());
    }

    /**
     * Test attribute "period"
     */
    public function testPropertyPeriod()
    {
        $enumInstance = new CreateReportScheduleSpecification();
        $allowedValues = $enumInstance->getPeriodAllowableValues();
        $testValue = reset($allowedValues);
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
