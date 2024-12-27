<?php
/**
 * CreateReportScheduleResponseTest
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
use OpenAPI\Client\Model\reports\CreateReportScheduleResponse;

/**
 * CreateReportScheduleResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     OpenAPI\Client
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
