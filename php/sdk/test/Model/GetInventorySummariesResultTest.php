<?php
/**
 * GetInventorySummariesResultTest
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
use SpApi\Model\fba\inventory\v1\GetInventorySummariesResult;

/**
 * GetInventorySummariesResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload schema for the getInventorySummaries operation.
 * @package     SpApi
 */
class GetInventorySummariesResultTest extends TestCase
{

    private GetInventorySummariesResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInventorySummariesResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInventorySummariesResult"
     */
    public function testGetInventorySummariesResult()
    {
        $this->assertInstanceOf(GetInventorySummariesResult::class, $this->model);
    }

    /**
     * Test attribute "granularity"
     */
    public function testPropertyGranularity()
    {
        
        $testValue = new \SpApi\Model\fba\inventory\v1\Granularity();
        
        $this->model->setGranularity($testValue);
        $this->assertEquals($testValue, $this->model->getGranularity());
    }

    /**
     * Test attribute "inventory_summaries"
     */
    public function testPropertyInventorySummaries()
    {
        $testValue = [];
        
        $this->model->setInventorySummaries($testValue);
        $this->assertEquals($testValue, $this->model->getInventorySummaries());
    }
}
