<?php
/**
 * CompetitiveSummaryBatchRequestTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\CompetitiveSummaryBatchRequest;

/**
 * CompetitiveSummaryBatchRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;competitiveSummary&#x60; batch request data.
 * @package     OpenAPI\Client
 */
class CompetitiveSummaryBatchRequestTest extends TestCase
{

    private CompetitiveSummaryBatchRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitiveSummaryBatchRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitiveSummaryBatchRequest"
     */
    public function testCompetitiveSummaryBatchRequest()
    {
        $this->assertInstanceOf(CompetitiveSummaryBatchRequest::class, $this->model);
    }

    /**
     * Test attribute "requests"
     */
    public function testPropertyRequests()
    {
        $testValue = [];
        
        $this->model->setRequests($testValue);
        $this->assertEquals($testValue, $this->model->getRequests());
    }
}
