<?php
/**
 * OfferTest
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
use OpenAPI\Client\Model\pricing\v2022-05-01\Offer;

/**
 * OfferTest Class Doc Comment
 *
 * @category    Class
 * @description The offer data of a product.
 * @package     OpenAPI\Client
 */
class OfferTest extends TestCase
{

    private Offer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Offer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Offer"
     */
    public function testOffer()
    {
        $this->assertInstanceOf(Offer::class, $this->model);
    }

    /**
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
    }

    /**
     * Test attribute "condition"
     */
    public function testPropertyCondition()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricing\v2022-05-01\Condition();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCondition($testValue);
        $this->assertEquals($testValue, $this->model->getCondition());
    }

    /**
     * Test attribute "sub_condition"
     */
    public function testPropertySubCondition()
    {
        $enumInstance = new Offer();
        $allowedValues = $enumInstance->getSubConditionAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setSubCondition($testValue);
        $this->assertEquals($testValue, $this->model->getSubCondition());
    }

    /**
     * Test attribute "fulfillment_type"
     */
    public function testPropertyFulfillmentType()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricing\v2022-05-01\FulfillmentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentType($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentType());
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022-05-01\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "shipping_options"
     */
    public function testPropertyShippingOptions()
    {
        $testValue = [];
        
        $this->model->setShippingOptions($testValue);
        $this->assertEquals($testValue, $this->model->getShippingOptions());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022-05-01\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }

    /**
     * Test attribute "prime_details"
     */
    public function testPropertyPrimeDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022-05-01\PrimeDetails();
        
        $this->model->setPrimeDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPrimeDetails());
    }
}
