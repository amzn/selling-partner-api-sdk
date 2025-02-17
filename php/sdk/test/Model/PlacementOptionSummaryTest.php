<?php
/**
 * PlacementOptionSummaryTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\PlacementOptionSummary;

/**
 * PlacementOptionSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description Summary information about a placement option.
 * @package     SpApi
 */
class PlacementOptionSummaryTest extends TestCase
{

    private PlacementOptionSummary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PlacementOptionSummary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PlacementOptionSummary"
     */
    public function testPlacementOptionSummary()
    {
        $this->assertInstanceOf(PlacementOptionSummary::class, $this->model);
    }

    /**
     * Test attribute "placement_option_id"
     */
    public function testPropertyPlacementOptionId()
    {
        $testValue = 'test';
        
        $this->model->setPlacementOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPlacementOptionId());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
