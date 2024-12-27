<?php
/**
 * FeesEstimateResultTest
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
use OpenAPI\Client\Model\productfees\FeesEstimateResult;

/**
 * FeesEstimateResultTest Class Doc Comment
 *
 * @category    Class
 * @description An item identifier and the estimated fees for the item.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\productfees\FeesEstimateIdentifier();
        
        $this->model->setFeesEstimateIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimateIdentifier());
    }

    /**
     * Test attribute "fees_estimate"
     */
    public function testPropertyFeesEstimate()
    {
        
        $testValue = new \OpenAPI\Client\Model\productfees\FeesEstimate();
        
        $this->model->setFeesEstimate($testValue);
        $this->assertEquals($testValue, $this->model->getFeesEstimate());
    }

    /**
     * Test attribute "error"
     */
    public function testPropertyError()
    {
        
        $testValue = new \OpenAPI\Client\Model\productfees\FeesEstimateError();
        
        $this->model->setError($testValue);
        $this->assertEquals($testValue, $this->model->getError());
    }
}
