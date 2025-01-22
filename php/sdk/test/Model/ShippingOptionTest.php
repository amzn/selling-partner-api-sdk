<?php
/**
 * ShippingOptionTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\ShippingOption;

/**
 * ShippingOptionTest Class Doc Comment
 *
 * @category    Class
 * @description The shipping option available for the offer.
 * @package     OpenAPI\Client
 */
class ShippingOptionTest extends TestCase
{

    private ShippingOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShippingOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShippingOption"
     */
    public function testShippingOption()
    {
        $this->assertInstanceOf(ShippingOption::class, $this->model);
    }

    /**
     * Test attribute "shipping_option_type"
     */
    public function testPropertyShippingOptionType()
    {
        $enumInstance = new ShippingOption();
        $allowedValues = $enumInstance->getShippingOptionTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setShippingOptionType($testValue);
        $this->assertEquals($testValue, $this->model->getShippingOptionType());
    }

    /**
     * Test attribute "price"
     */
    public function testPropertyPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\MoneyType();
        
        $this->model->setPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPrice());
    }
}
