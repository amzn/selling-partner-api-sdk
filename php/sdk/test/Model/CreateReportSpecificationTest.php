<?php
/**
 * CreateReportSpecificationTest
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
use OpenAPI\Client\Model\reports\v2021_06_30\CreateReportSpecification;

/**
 * CreateReportSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create the report.
 * @package     OpenAPI\Client
 */
class CreateReportSpecificationTest extends TestCase
{

    private CreateReportSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateReportSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateReportSpecification"
     */
    public function testCreateReportSpecification()
    {
        $this->assertInstanceOf(CreateReportSpecification::class, $this->model);
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
     * Test attribute "marketplace_ids"
     */
    public function testPropertyMarketplaceIds()
    {
        $testValue = [];
        
        $this->model->setMarketplaceIds($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceIds());
    }
}
