<?php
/**
 * CompetitiveSummaryResponseTest
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
use OpenAPI\Client\Model\pricing\CompetitiveSummaryResponse;

/**
 * CompetitiveSummaryResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response for the individual &#x60;competitiveSummary&#x60; request in the batch operation.
 * @package     OpenAPI\Client
 */
class CompetitiveSummaryResponseTest extends TestCase
{

    private CompetitiveSummaryResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitiveSummaryResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitiveSummaryResponse"
     */
    public function testCompetitiveSummaryResponse()
    {
        $this->assertInstanceOf(CompetitiveSummaryResponse::class, $this->model);
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\HttpStatusLine();
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\CompetitiveSummaryResponseBody();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
