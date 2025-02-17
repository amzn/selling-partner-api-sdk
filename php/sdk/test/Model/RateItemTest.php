<?php
/**
 * RateItemTest
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
use SpApi\Model\shipping\v2\RateItem;

/**
 * RateItemTest Class Doc Comment
 *
 * @category    Class
 * @description Rate Item for shipping (base cost, transaction fee, confirmation, insurance, etc.) Data source definition:
 * @package     SpApi
 */
class RateItemTest extends TestCase
{

    private RateItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RateItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RateItem"
     */
    public function testRateItem()
    {
        $this->assertInstanceOf(RateItem::class, $this->model);
    }

    /**
     * Test attribute "rate_item_id"
     */
    public function testPropertyRateItemId()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\RateItemID();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRateItemId($testValue);
        $this->assertEquals($testValue, $this->model->getRateItemId());
    }

    /**
     * Test attribute "rate_item_type"
     */
    public function testPropertyRateItemType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\RateItemType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRateItemType($testValue);
        $this->assertEquals($testValue, $this->model->getRateItemType());
    }

    /**
     * Test attribute "rate_item_charge"
     */
    public function testPropertyRateItemCharge()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Currency();
        
        $this->model->setRateItemCharge($testValue);
        $this->assertEquals($testValue, $this->model->getRateItemCharge());
    }

    /**
     * Test attribute "rate_item_name_localization"
     */
    public function testPropertyRateItemNameLocalization()
    {
        $testValue = 'test';
        
        $this->model->setRateItemNameLocalization($testValue);
        $this->assertEquals($testValue, $this->model->getRateItemNameLocalization());
    }
}
