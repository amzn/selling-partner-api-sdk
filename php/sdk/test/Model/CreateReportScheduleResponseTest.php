<?php
/**
 * CreateReportScheduleResponseTest
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
use SpApi\Model\reports\v2021_06_30\CreateReportScheduleResponse;

/**
 * CreateReportScheduleResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     SpApi
 */
class CreateReportScheduleResponseTest extends TestCase
{

    private CreateReportScheduleResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateReportScheduleResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateReportScheduleResponse"
     */
    public function testCreateReportScheduleResponse()
    {
        $this->assertInstanceOf(CreateReportScheduleResponse::class, $this->model);
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
}
