<?php
/**
 * ItemOfferByMarketplaceTest
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
use SpApi\Model\listings\items\v2021_08_01\ItemOfferByMarketplace;

/**
 * ItemOfferByMarketplaceTest Class Doc Comment
 *
 * @category    Class
 * @description Offer details of a listings item for an Amazon marketplace.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\listings\items\v2021_08_01\Money();
        
        $this->model->setPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPrice());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \SpApi\Model\listings\items\v2021_08_01\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }

    /**
     * Test attribute "audience"
     */
    public function testPropertyAudience()
    {
        
        $testValue = new \SpApi\Model\listings\items\v2021_08_01\Audience();
        
        $this->model->setAudience($testValue);
        $this->assertEquals($testValue, $this->model->getAudience());
    }
}
