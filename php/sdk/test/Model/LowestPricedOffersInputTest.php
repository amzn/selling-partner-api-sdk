<?php
/**
 * LowestPricedOffersInputTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\LowestPricedOffersInput;

/**
 * LowestPricedOffersInputTest Class Doc Comment
 *
 * @category    Class
 * @description The input required for building &#x60;LowestPricedOffers&#x60; data in the response.
 * @package     OpenAPI\Client
 */
class LowestPricedOffersInputTest extends TestCase
{

    private LowestPricedOffersInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LowestPricedOffersInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LowestPricedOffersInput"
     */
    public function testLowestPricedOffersInput()
    {
        $this->assertInstanceOf(LowestPricedOffersInput::class, $this->model);
    }

    /**
     * Test attribute "item_condition"
     */
    public function testPropertyItemCondition()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricing\v2022_05_01\Condition();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setItemCondition($testValue);
        $this->assertEquals($testValue, $this->model->getItemCondition());
    }

    /**
     * Test attribute "offer_type"
     */
    public function testPropertyOfferType()
    {
        $enumInstance = new LowestPricedOffersInput();
        $allowedValues = $enumInstance->getOfferTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setOfferType($testValue);
        $this->assertEquals($testValue, $this->model->getOfferType());
    }
}
