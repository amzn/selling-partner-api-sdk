<?php
/**
 * GetFeatureInventoryResultTest
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
use OpenAPI\Client\Model\fulfillment\outbound\GetFeatureInventoryResult;

/**
 * GetFeatureInventoryResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;getEligibileInventory&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetFeatureInventoryResultTest extends TestCase
{

    private GetFeatureInventoryResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeatureInventoryResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeatureInventoryResult"
     */
    public function testGetFeatureInventoryResult()
    {
        $this->assertInstanceOf(GetFeatureInventoryResult::class, $this->model);
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
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }

    /**
     * Test attribute "feature_skus"
     */
    public function testPropertyFeatureSkus()
    {
        $testValue = [];
        
        $this->model->setFeatureSkus($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureSkus());
    }
}
