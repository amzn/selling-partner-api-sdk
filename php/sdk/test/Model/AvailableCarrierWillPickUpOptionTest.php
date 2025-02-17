<?php
/**
 * AvailableCarrierWillPickUpOptionTest
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
use SpApi\Model\merchantFulfillment\v0\AvailableCarrierWillPickUpOption;

/**
 * AvailableCarrierWillPickUpOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates whether the carrier will pick up the package, and what fee is charged, if any.
 * @package     SpApi
 */
class AvailableCarrierWillPickUpOptionTest extends TestCase
{

    private AvailableCarrierWillPickUpOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AvailableCarrierWillPickUpOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AvailableCarrierWillPickUpOption"
     */
    public function testAvailableCarrierWillPickUpOption()
    {
        $this->assertInstanceOf(AvailableCarrierWillPickUpOption::class, $this->model);
    }

    /**
     * Test attribute "carrier_will_pick_up_option"
     */
    public function testPropertyCarrierWillPickUpOption()
    {
        $enumInstance = new \SpApi\Model\merchantFulfillment\v0\CarrierWillPickUpOption();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCarrierWillPickUpOption($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierWillPickUpOption());
    }

    /**
     * Test attribute "charge"
     */
    public function testPropertyCharge()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\CurrencyAmount();
        
        $this->model->setCharge($testValue);
        $this->assertEquals($testValue, $this->model->getCharge());
    }
}
