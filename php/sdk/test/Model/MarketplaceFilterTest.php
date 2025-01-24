<?php
/**
 * MarketplaceFilterTest
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
use OpenAPI\Client\Model\notifications\MarketplaceFilter;

/**
 * MarketplaceFilterTest Class Doc Comment
 *
 * @category    Class
 * @description An event filter to customize your subscription to send notifications for only the specified &#x60;marketplaceId&#x60;s.
 * @package     OpenAPI\Client
 */
class MarketplaceFilterTest extends TestCase
{

    private MarketplaceFilter $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MarketplaceFilter();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MarketplaceFilter"
     */
    public function testMarketplaceFilter()
    {
        $this->assertInstanceOf(MarketplaceFilter::class, $this->model);
    }

    /**
     * Test attribute "marketplace_ids"
     */
    public function testPropertyMarketplaceIds()
    {
        $testValue = [];
        
        $this->model->setMarketplaceIds($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceIds());
    }
}
