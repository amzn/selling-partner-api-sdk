<?php
/**
 * ItemOfferByMarketplaceTest
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
use OpenAPI\Client\Model\listings\items\ItemOfferByMarketplace;

/**
 * ItemOfferByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Offer details of a listings item for an Amazon marketplace.
 * @package     OpenAPI\Client
 */
class ItemOfferByMarketplaceTest extends TestCase
{

    private ItemOfferByMarketplace $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemOfferByMarketplace();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemOfferByMarketplace"
     */
    public function testItemOfferByMarketplace()
    {
        $this->assertInstanceOf(ItemOfferByMarketplace::class, $this->model);
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
     * Test attribute "offer_type"
     */
    public function testPropertyOfferType()
    {
        $enumInstance = new ItemOfferByMarketplace();
        $allowedValues = $enumInstance->getOfferTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setOfferType($testValue);
        $this->assertEquals($testValue, $this->model->getOfferType());
    }

    /**
     * Test attribute "price"
     */
    public function testPropertyPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\listings\items\Money();
        
        $this->model->setPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPrice());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \OpenAPI\Client\Model\listings\items\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }

    /**
     * Test attribute "audience"
     */
    public function testPropertyAudience()
    {
        
        $testValue = new \OpenAPI\Client\Model\listings\items\Audience();
        
        $this->model->setAudience($testValue);
        $this->assertEquals($testValue, $this->model->getAudience());
    }
}
