<?php
/**
 * CreateReportResponseTest
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
use OpenAPI\Client\Model\reports\CreateReportResponse;

/**
 * CreateReportResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema.
 * @package     OpenAPI\Client
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
