<?php
/**
 * OfferDetailTest
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
use OpenAPI\Client\Model\pricing\v0\OfferDetail;

/**
 * OfferDetailTest Class Doc Comment
 *
 * @category    Class
 * @description OfferDetail
 * @package     OpenAPI\Client
 */
class OfferDetailTest extends TestCase
{

    private OfferDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferDetail"
     */
    public function testOfferDetail()
    {
        $this->assertInstanceOf(OfferDetail::class, $this->model);
    }

    /**
     * Test attribute "my_offer"
     */
    public function testPropertyMyOffer()
    {
        $testValue = true;
        
        $this->model->setMyOffer($testValue);
        $this->assertEquals($testValue, $this->model->getMyOffer());
    }

    /**
     * Test attribute "offer_type"
     */
    public function testPropertyOfferType()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricing\v0\OfferCustomerType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOfferType($testValue);
        $this->assertEquals($testValue, $this->model->getOfferType());
    }

    /**
     * Test attribute "sub_condition"
     */
    public function testPropertySubCondition()
    {
        $testValue = 'test';
        
        $this->model->setSubCondition($testValue);
        $this->assertEquals($testValue, $this->model->getSubCondition());
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
     * Test attribute "condition_notes"
     */
    public function testPropertyConditionNotes()
    {
        $testValue = 'test';
        
        $this->model->setConditionNotes($testValue);
        $this->assertEquals($testValue, $this->model->getConditionNotes());
    }

    /**
     * Test attribute "seller_feedback_rating"
     */
    public function testPropertySellerFeedbackRating()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\SellerFeedbackType();
        
        $this->model->setSellerFeedbackRating($testValue);
        $this->assertEquals($testValue, $this->model->getSellerFeedbackRating());
    }

    /**
     * Test attribute "shipping_time"
     */
    public function testPropertyShippingTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\DetailedShippingTimeType();
        
        $this->model->setShippingTime($testValue);
        $this->assertEquals($testValue, $this->model->getShippingTime());
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "quantity_discount_prices"
     */
    public function testPropertyQuantityDiscountPrices()
    {
        $testValue = [];
        
        $this->model->setQuantityDiscountPrices($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityDiscountPrices());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }

    /**
     * Test attribute "shipping"
     */
    public function testPropertyShipping()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\MoneyType();
        
        $this->model->setShipping($testValue);
        $this->assertEquals($testValue, $this->model->getShipping());
    }

    /**
     * Test attribute "ships_from"
     */
    public function testPropertyShipsFrom()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\ShipsFromType();
        
        $this->model->setShipsFrom($testValue);
        $this->assertEquals($testValue, $this->model->getShipsFrom());
    }

    /**
     * Test attribute "is_fulfilled_by_amazon"
     */
    public function testPropertyIsFulfilledByAmazon()
    {
        $testValue = true;
        
        $this->model->setIsFulfilledByAmazon($testValue);
        $this->assertEquals($testValue, $this->model->getIsFulfilledByAmazon());
    }

    /**
     * Test attribute "prime_information"
     */
    public function testPropertyPrimeInformation()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\PrimeInformationType();
        
        $this->model->setPrimeInformation($testValue);
        $this->assertEquals($testValue, $this->model->getPrimeInformation());
    }

    /**
     * Test attribute "is_buy_box_winner"
     */
    public function testPropertyIsBuyBoxWinner()
    {
        $testValue = true;
        
        $this->model->setIsBuyBoxWinner($testValue);
        $this->assertEquals($testValue, $this->model->getIsBuyBoxWinner());
    }

    /**
     * Test attribute "is_featured_merchant"
     */
    public function testPropertyIsFeaturedMerchant()
    {
        $testValue = true;
        
        $this->model->setIsFeaturedMerchant($testValue);
        $this->assertEquals($testValue, $this->model->getIsFeaturedMerchant());
    }
}
