<?php
/**
 * FeaturedOfferExpectedPriceRequestParamsTest
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
use SpApi\Model\pricing\v2022_05_01\FeaturedOfferExpectedPriceRequestParams;

/**
 * FeaturedOfferExpectedPriceRequestParamsTest Class Doc Comment
 *
 * @category    Class
 * @description The parameters for an individual request.
 * @package     SpApi
 */
class FeaturedOfferExpectedPriceRequestParamsTest extends TestCase
{

    private FeaturedOfferExpectedPriceRequestParams $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferExpectedPriceRequestParams();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferExpectedPriceRequestParams"
     */
    public function testFeaturedOfferExpectedPriceRequestParams()
    {
        $this->assertInstanceOf(FeaturedOfferExpectedPriceRequestParams::class, $this->model);
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
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "segment"
     */
    public function testPropertySegment()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\Segment();
        
        $this->model->setSegment($testValue);
        $this->assertEquals($testValue, $this->model->getSegment());
    }
}
