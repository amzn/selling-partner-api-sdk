<?php
/**
 * CompetitiveSummaryRequestTest
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
use SpApi\Model\pricing\v2022_05_01\CompetitiveSummaryRequest;

/**
 * CompetitiveSummaryRequestTest Class Doc Comment
 *
 * @category    Class
 * @description An individual &#x60;competitiveSummary&#x60; request for an ASIN and &#x60;marketplaceId&#x60;.
 * @package     SpApi
 */
class CompetitiveSummaryRequestTest extends TestCase
{

    private CompetitiveSummaryRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitiveSummaryRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitiveSummaryRequest"
     */
    public function testCompetitiveSummaryRequest()
    {
        $this->assertInstanceOf(CompetitiveSummaryRequest::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "included_data"
     */
    public function testPropertyIncludedData()
    {
        $testValue = [];
        
        $this->model->setIncludedData($testValue);
        $this->assertEquals($testValue, $this->model->getIncludedData());
    }

    /**
     * Test attribute "lowest_priced_offers_inputs"
     */
    public function testPropertyLowestPricedOffersInputs()
    {
        $testValue = [];
        
        $this->model->setLowestPricedOffersInputs($testValue);
        $this->assertEquals($testValue, $this->model->getLowestPricedOffersInputs());
    }

    /**
     * Test attribute "method"
     */
    public function testPropertyMethod()
    {
        $enumInstance = new \SpApi\Model\pricing\v2022_05_01\HttpMethod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setMethod($testValue);
        $this->assertEquals($testValue, $this->model->getMethod());
    }

    /**
     * Test attribute "uri"
     */
    public function testPropertyUri()
    {
        $testValue = 'test';
        
        $this->model->setUri($testValue);
        $this->assertEquals($testValue, $this->model->getUri());
    }
}
