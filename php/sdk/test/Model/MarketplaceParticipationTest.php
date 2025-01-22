<?php
/**
 * MarketplaceParticipationTest
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
use OpenAPI\Client\Model\sellers\MarketplaceParticipation;

/**
 * MarketplaceParticipationTest Class Doc Comment
 *
 * @category    Class
 * @description MarketplaceParticipation
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\sellers\Marketplace();
        
        $this->model->setMarketplace($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplace());
    }

    /**
     * Test attribute "participation"
     */
    public function testPropertyParticipation()
    {
        
        $testValue = new \OpenAPI\Client\Model\sellers\Participation();
        
        $this->model->setParticipation($testValue);
        $this->assertEquals($testValue, $this->model->getParticipation());
    }
}
