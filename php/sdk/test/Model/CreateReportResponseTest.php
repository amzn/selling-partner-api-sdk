<?php
/**
 * CreateReportResponseTest
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
use SpApi\Model\reports\v2021_06_30\CreateReportResponse;

/**
 * CreateReportResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema.
 * @package     SpApi
 */
class CreateReportResponseTest extends TestCase
{

    private CreateReportResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateReportResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateReportResponse"
     */
    public function testCreateReportResponse()
    {
        $this->assertInstanceOf(CreateReportResponse::class, $this->model);
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
}
