<?php
/**
 * FeesEstimateResultTest
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
use SpApi\Model\productFees\v0\FeesEstimateResult;

/**
 * FeesEstimateResultTest Class Doc Comment
 *
 * @category    Class
 * @description An item identifier and the estimated fees for the item.
 * @package     SpApi
 */
class FeesEstimateResultTest extends TestCase
{

    private FeesEstimateResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeesEstimateResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeesEstimateResult"
     */
    public function testFeesEstimateResult()
    {
        $this->assertInstanceOf(FeesEstimateResult::class, $this->model);
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

    /**
     * Test attribute "fees_estimate_identifier"
     */
    public function testPropertyFeesEstimateIdentifier()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\FeesEstimateIdentifier();
        
        $this->model->setFeesEstimateIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimateIdentifier());
    }

    /**
     * Test attribute "fees_estimate"
     */
    public function testPropertyFeesEstimate()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\FeesEstimate();
        
        $this->model->setFeesEstimate($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimate());
    }

    /**
     * Test attribute "error"
     */
    public function testPropertyError()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\FeesEstimateError();
        
        $this->model->setError($testValue);
        $this->assertEquals($testValue, $this->model->getError());
    }
}
