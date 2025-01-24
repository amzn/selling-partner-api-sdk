<?php
/**
 * StandardComparisonTableModuleTest
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
use OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule;

/**
 * StandardComparisonTableModuleTest Class Doc Comment
 *
 * @category    Class
 * @description The standard product comparison table.
 * @package     OpenAPI\Client
 */
class StandardComparisonTableModuleTest extends TestCase
{

    private StandardComparisonTableModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardComparisonTableModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardComparisonTableModule"
     */
    public function testStandardComparisonTableModule()
    {
        $this->assertInstanceOf(StandardComparisonTableModule::class, $this->model);
    }

    /**
     * Test attribute "product_columns"
     */
    public function testPropertyProductColumns()
    {
        $testValue = [];
        
        $this->model->setProductColumns($testValue);
        $this->assertEquals($testValue, $this->model->getProductColumns());
    }

    /**
     * Test attribute "metric_row_labels"
     */
    public function testPropertyMetricRowLabels()
    {
        $testValue = [];
        
        $this->model->setMetricRowLabels($testValue);
        $this->assertEquals($testValue, $this->model->getMetricRowLabels());
    }
}
