<?php
/**
 * MarketplaceParticipationTest
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
use SpApi\Model\sellers\v1\MarketplaceParticipation;

/**
 * MarketplaceParticipationTest Class Doc Comment
 *
 * @category    Class
 * @description MarketplaceParticipation
 * @package     SpApi
 */
class MarketplaceParticipationTest extends TestCase
{

    private MarketplaceParticipation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MarketplaceParticipation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MarketplaceParticipation"
     */
    public function testMarketplaceParticipation()
    {
        $this->assertInstanceOf(MarketplaceParticipation::class, $this->model);
    }

    /**
     * Test attribute "marketplace"
     */
    public function testPropertyMarketplace()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\Marketplace();
        
        $this->model->setMarketplace($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplace());
    }

    /**
     * Test attribute "participation"
     */
    public function testPropertyParticipation()
    {
        
        $testValue = new \SpApi\Model\sellers\v1\Participation();
        
        $this->model->setParticipation($testValue);
        $this->assertEquals($testValue, $this->model->getParticipation());
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
}
