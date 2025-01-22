<?php
/**
 * QuantityDiscountPriceTypeTest
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
use OpenAPI\Client\Model\pricing\v0\QuantityDiscountPriceType;

/**
 * QuantityDiscountPriceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Contains pricing information that includes special pricing when buying in bulk.
 * @package     OpenAPI\Client
 */
class QuantityDiscountPriceTypeTest extends TestCase
{

    private QuantityDiscountPriceType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new QuantityDiscountPriceType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "QuantityDiscountPriceType"
     */
    public function testQuantityDiscountPriceType()
    {
        $this->assertInstanceOf(QuantityDiscountPriceType::class, $this->model);
    }

    /**
     * Test attribute "quantity_tier"
     */
    public function testPropertyQuantityTier()
    {
        $testValue = 123;
        
        $this->model->setQuantityTier($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityTier());
    }

    /**
     * Test attribute "quantity_discount_type"
     */
    public function testPropertyQuantityDiscountType()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricing\v0\QuantityDiscountType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setQuantityDiscountType($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityDiscountType());
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
}
