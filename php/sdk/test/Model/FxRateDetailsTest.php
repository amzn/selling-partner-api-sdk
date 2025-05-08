<?php
/**
 * FxRateDetailsTest
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
use SpApi\Model\sellerWallet\v2024_03_01\FxRateDetails;

/**
 * FxRateDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Foreign exchange rate details.
 * @package     SpApi
 */
class FxRateDetailsTest extends TestCase
{

    private FxRateDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FxRateDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FxRateDetails"
     */
    public function testFxRateDetails()
    {
        $this->assertInstanceOf(FxRateDetails::class, $this->model);
    }

    /**
     * Test attribute "fx_rate_id"
     */
    public function testPropertyFxRateId()
    {
        $testValue = 'test';
        
        $this->model->setFxRateId($testValue);
        $this->assertEquals($testValue, $this->model->getFxRateId());
    }

    /**
     * Test attribute "base_rate"
     */
    public function testPropertyBaseRate()
    {
        $testValue = 1;
        
        $this->model->setBaseRate($testValue);
        $this->assertEquals($testValue, $this->model->getBaseRate());
    }

    /**
     * Test attribute "effective_fx_rate"
     */
    public function testPropertyEffectiveFxRate()
    {
        $testValue = 1;
        
        $this->model->setEffectiveFxRate($testValue);
        $this->assertEquals($testValue, $this->model->getEffectiveFxRate());
    }

    /**
     * Test attribute "rate_direction"
     */
    public function testPropertyRateDirection()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\RateDirection();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRateDirection($testValue);
        $this->assertEquals($testValue, $this->model->getRateDirection());
    }
}
