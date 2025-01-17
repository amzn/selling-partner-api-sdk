<?php
/**
 * FeaturedBuyingOptionTest
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
use OpenAPI\Client\Model\pricing\v2022-05-01\FeaturedBuyingOption;

/**
 * FeaturedBuyingOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Describes a featured buying option, which includes a list of segmented featured offers for a particular item condition.
 * @package     OpenAPI\Client
 */
class FeaturedBuyingOptionTest extends TestCase
{

    private FeaturedBuyingOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedBuyingOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedBuyingOption"
     */
    public function testFeaturedBuyingOption()
    {
        $this->assertInstanceOf(FeaturedBuyingOption::class, $this->model);
    }

    /**
     * Test attribute "buying_option_type"
     */
    public function testPropertyBuyingOptionType()
    {
        $enumInstance = new FeaturedBuyingOption();
        $allowedValues = $enumInstance->getBuyingOptionTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setBuyingOptionType($testValue);
        $this->assertEquals($testValue, $this->model->getBuyingOptionType());
    }

    /**
     * Test attribute "segmented_featured_offers"
     */
    public function testPropertySegmentedFeaturedOffers()
    {
        $testValue = [];
        
        $this->model->setSegmentedFeaturedOffers($testValue);
        $this->assertEquals($testValue, $this->model->getSegmentedFeaturedOffers());
    }
}
