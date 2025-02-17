<?php
/**
 * GetFeatureSkuResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFeatureSkuResult;

/**
 * GetFeatureSkuResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;getFeatureSKU&#x60; operation.
 * @package     SpApi
 */
class GetFeatureSkuResultTest extends TestCase
{

    private GetFeatureSkuResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeatureSkuResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeatureSkuResult"
     */
    public function testGetFeatureSkuResult()
    {
        $this->assertInstanceOf(GetFeatureSkuResult::class, $this->model);
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
     * Test attribute "feature_name"
     */
    public function testPropertyFeatureName()
    {
        $testValue = 'test';
        
        $this->model->setFeatureName($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureName());
    }

    /**
     * Test attribute "is_eligible"
     */
    public function testPropertyIsEligible()
    {
        $testValue = true;
        
        $this->model->setIsEligible($testValue);
        $this->assertEquals($testValue, $this->model->getIsEligible());
    }

    /**
     * Test attribute "ineligible_reasons"
     */
    public function testPropertyIneligibleReasons()
    {
        $testValue = [];
        
        $this->model->setIneligibleReasons($testValue);
        $this->assertEquals($testValue, $this->model->getIneligibleReasons());
    }

    /**
     * Test attribute "sku_info"
     */
    public function testPropertySkuInfo()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\FeatureSku();
        
        $this->model->setSkuInfo($testValue);
        $this->assertEquals($testValue, $this->model->getSkuInfo());
    }
}
