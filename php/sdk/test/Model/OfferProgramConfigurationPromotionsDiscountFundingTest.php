<?php
/**
 * OfferProgramConfigurationPromotionsDiscountFundingTest
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
use SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotionsDiscountFunding;

/**
 * OfferProgramConfigurationPromotionsDiscountFundingTest Class Doc Comment
 *
 * @category    Class
 * @description A promotional percentage discount applied to the offer.
 * @package     SpApi
 */
class OfferProgramConfigurationPromotionsDiscountFundingTest extends TestCase
{

    private OfferProgramConfigurationPromotionsDiscountFunding $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferProgramConfigurationPromotionsDiscountFunding();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferProgramConfigurationPromotionsDiscountFunding"
     */
    public function testOfferProgramConfigurationPromotionsDiscountFunding()
    {
        $this->assertInstanceOf(OfferProgramConfigurationPromotionsDiscountFunding::class, $this->model);
    }

    /**
     * Test attribute "percentage"
     */
    public function testPropertyPercentage()
    {
        $testValue = 1;
        
        $this->model->setPercentage($testValue);
        $this->assertEquals($testValue, $this->model->getPercentage());
    }
}
