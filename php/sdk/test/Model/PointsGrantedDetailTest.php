<?php
/**
 * PointsGrantedDetailTest
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
use SpApi\Model\orders\v0\PointsGrantedDetail;

/**
 * PointsGrantedDetailTest Class Doc Comment
 *
 * @category    Class
 * @description The number of Amazon Points offered with the purchase of an item, and their monetary value.
 * @package     SpApi
 */
class PointsGrantedDetailTest extends TestCase
{

    private PointsGrantedDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PointsGrantedDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PointsGrantedDetail"
     */
    public function testPointsGrantedDetail()
    {
        $this->assertInstanceOf(PointsGrantedDetail::class, $this->model);
    }

    /**
     * Test attribute "points_number"
     */
    public function testPropertyPointsNumber()
    {
        $testValue = 123;
        
        $this->model->setPointsNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPointsNumber());
    }

    /**
     * Test attribute "points_monetary_value"
     */
    public function testPropertyPointsMonetaryValue()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setPointsMonetaryValue($testValue);
        $this->assertEquals($testValue, $this->model->getPointsMonetaryValue());
    }
}
