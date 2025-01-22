<?php
/**
 * MarketplaceLevelAttributesTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\sellers\MarketplaceLevelAttributes;

/**
 * MarketplaceLevelAttributesTest Class Doc Comment
 *
 * @category    Class
 * @description Attributes that define the seller&#39;s presence and status within a specific marketplace. These attributes include the marketplace details, store name, listing status, and the selling plan the seller is subscribed to.
 * @package     OpenAPI\Client
 */
class MarketplaceLevelAttributesTest extends TestCase
{

    private MarketplaceLevelAttributes $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MarketplaceLevelAttributes();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MarketplaceLevelAttributes"
     */
    public function testMarketplaceLevelAttributes()
    {
        $this->assertInstanceOf(MarketplaceLevelAttributes::class, $this->model);
    }

    /**
     * Test attribute "marketplace"
     */
    public function testPropertyMarketplace()
    {
        
        $testValue = new \OpenAPI\Client\Model\sellers\Marketplace();
        
        $this->model->setMarketplace($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplace());
    }

    /**
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $testValue = 'test';
        
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }

    /**
     * Test attribute "listing_status"
     */
    public function testPropertyListingStatus()
    {
        $enumInstance = new MarketplaceLevelAttributes();
        $allowedValues = $enumInstance->getListingStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setListingStatus($testValue);
        $this->assertEquals($testValue, $this->model->getListingStatus());
    }

    /**
     * Test attribute "selling_plan"
     */
    public function testPropertySellingPlan()
    {
        $enumInstance = new MarketplaceLevelAttributes();
        $allowedValues = $enumInstance->getSellingPlanAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setSellingPlan($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPlan());
    }
}
