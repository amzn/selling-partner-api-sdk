<?php
/**
 * ResearchingQuantityTest
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
use SpApi\Model\fba\inventory\v1\ResearchingQuantity;

/**
 * ResearchingQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers.
 * @package     SpApi
 */
class ResearchingQuantityTest extends TestCase
{

    private ResearchingQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ResearchingQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ResearchingQuantity"
     */
    public function testResearchingQuantity()
    {
        $this->assertInstanceOf(ResearchingQuantity::class, $this->model);
    }

    /**
     * Test attribute "total_researching_quantity"
     */
    public function testPropertyTotalResearchingQuantity()
    {
        $testValue = 123;
        
        $this->model->setTotalResearchingQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getTotalResearchingQuantity());
    }

    /**
     * Test attribute "researching_quantity_breakdown"
     */
    public function testPropertyResearchingQuantityBreakdown()
    {
        $testValue = [];
        
        $this->model->setResearchingQuantityBreakdown($testValue);
        $this->assertEquals($testValue, $this->model->getResearchingQuantityBreakdown());
    }
}
