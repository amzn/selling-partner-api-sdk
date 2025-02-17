<?php
/**
 * FeesEstimateTest
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
use SpApi\Model\productFees\v0\FeesEstimate;

/**
 * FeesEstimateTest Class Doc Comment
 *
 * @category    Class
 * @description The total estimated fees for an item and a list of details.
 * @package     SpApi
 */
class FeesEstimateTest extends TestCase
{

    private FeesEstimate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeesEstimate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeesEstimate"
     */
    public function testFeesEstimate()
    {
        $this->assertInstanceOf(FeesEstimate::class, $this->model);
    }

    /**
     * Test attribute "time_of_fees_estimation"
     */
    public function testPropertyTimeOfFeesEstimation()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setTimeOfFeesEstimation($testValue);
        $this->assertEquals($testValue, $this->model->getTimeOfFeesEstimation());
    }

    /**
     * Test attribute "total_fees_estimate"
     */
    public function testPropertyTotalFeesEstimate()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\MoneyType();
        
        $this->model->setTotalFeesEstimate($testValue);
        $this->assertEquals($testValue, $this->model->getTotalFeesEstimate());
    }

    /**
     * Test attribute "fee_detail_list"
     */
    public function testPropertyFeeDetailList()
    {
        $testValue = [];
        
        $this->model->setFeeDetailList($testValue);
        $this->assertEquals($testValue, $this->model->getFeeDetailList());
    }
}
