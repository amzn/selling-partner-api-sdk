<?php
/**
 * MarketplaceDetailsTest
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
use SpApi\Model\finances\v2024_06_19\MarketplaceDetails;

/**
 * MarketplaceDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the marketplace where the transaction occurred.
 * @package     SpApi
 */
class MarketplaceDetailsTest extends TestCase
{

    private MarketplaceDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MarketplaceDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MarketplaceDetails"
     */
    public function testMarketplaceDetails()
    {
        $this->assertInstanceOf(MarketplaceDetails::class, $this->model);
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
     * Test attribute "marketplace_name"
     */
    public function testPropertyMarketplaceName()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceName($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceName());
    }
}
