<?php
/**
 * RateItemTest
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
use OpenAPI\Client\Model\shipping\RateItem;

/**
 * RateItemTest Class Doc Comment
 *
 * @category    Class
 * @description Rate Item for shipping (base cost, transaction fee, confirmation, insurance, etc.) Data source definition:
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\shipping\RateItemID();
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
        $enumInstance = new \OpenAPI\Client\Model\shipping\RateItemType();
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
        
        $testValue = new \OpenAPI\Client\Model\shipping\Currency();
        
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
