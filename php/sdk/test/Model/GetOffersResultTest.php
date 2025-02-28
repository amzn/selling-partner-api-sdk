<?php
/**
 * GetOffersResultTest
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
use SpApi\Model\pricing\v0\GetOffersResult;

/**
 * GetOffersResultTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the getListingOffers and getItemOffers operations.
 * @package     SpApi
 */
class GetOffersResultTest extends TestCase
{

    private GetOffersResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOffersResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOffersResult"
     */
    public function testGetOffersResult()
    {
        $this->assertInstanceOf(GetOffersResult::class, $this->model);
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
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "item_condition"
     */
    public function testPropertyItemCondition()
    {
        $enumInstance = new \SpApi\Model\pricing\v0\ConditionType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setItemCondition($testValue);
        $this->assertEquals($testValue, $this->model->getItemCondition());
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
     * Test attribute "identifier"
     */
    public function testPropertyIdentifier()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\ItemIdentifier();
        
        $this->model->setIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifier());
    }

    /**
     * Test attribute "summary"
     */
    public function testPropertySummary()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\Summary();
        
        $this->model->setSummary($testValue);
        $this->assertEquals($testValue, $this->model->getSummary());
    }

    /**
     * Test attribute "offers"
     */
    public function testPropertyOffers()
    {
        $testValue = [];
        
        $this->model->setOffers($testValue);
        $this->assertEquals($testValue, $this->model->getOffers());
    }
}
