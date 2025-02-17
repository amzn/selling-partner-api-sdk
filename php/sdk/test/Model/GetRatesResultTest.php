<?php
/**
 * GetRatesResultTest
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
use SpApi\Model\shipping\v2\GetRatesResult;

/**
 * GetRatesResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the getRates operation.
 * @package     SpApi
 */
class GetRatesResultTest extends TestCase
{

    private GetRatesResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetRatesResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetRatesResult"
     */
    public function testGetRatesResult()
    {
        $this->assertInstanceOf(GetRatesResult::class, $this->model);
    }

    /**
     * Test attribute "request_token"
     */
    public function testPropertyRequestToken()
    {
        $testValue = 'test';
        
        $this->model->setRequestToken($testValue);
        $this->assertEquals($testValue, $this->model->getRequestToken());
    }

    /**
     * Test attribute "rates"
     */
    public function testPropertyRates()
    {
        $testValue = [];
        
        $this->model->setRates($testValue);
        $this->assertEquals($testValue, $this->model->getRates());
    }

    /**
     * Test attribute "ineligible_rates"
     */
    public function testPropertyIneligibleRates()
    {
        $testValue = [];
        
        $this->model->setIneligibleRates($testValue);
        $this->assertEquals($testValue, $this->model->getIneligibleRates());
    }
}
