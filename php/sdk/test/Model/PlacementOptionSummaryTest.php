<?php
/**
 * PlacementOptionSummaryTest
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
use OpenAPI\Client\Model\fulfillmentinbound\PlacementOptionSummary;

/**
 * PlacementOptionSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description Summary information about a placement option.
 * @package     OpenAPI\Client
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
