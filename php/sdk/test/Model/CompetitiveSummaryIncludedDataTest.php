<?php
/**
 * CompetitiveSummaryIncludedDataTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\CompetitiveSummaryIncludedData;

/**
 * CompetitiveSummaryIncludedDataTest Class Doc Comment
 *
 * @category    Class
 * @description The supported data types in the &#x60;getCompetitiveSummary&#x60; API.
 * @package     OpenAPI\Client
 */
class CompetitiveSummaryIncludedDataTest extends TestCase
{

    private CompetitiveSummaryIncludedData $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitiveSummaryIncludedData();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitiveSummaryIncludedData"
     */
    public function testCompetitiveSummaryIncludedData()
    {
        $this->assertInstanceOf(CompetitiveSummaryIncludedData::class, $this->model);
    }
}
