<?php
/**
 * ItemOffersRequestParamsTest
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
use SpApi\Model\pricing\v0\ItemOffersRequestParams;

/**
 * ItemOffersRequestParamsTest Class Doc Comment
 *
 * @category    Class
 * @description List of request parameters that can be accepted by &#x60;ItemOffersRequest&#x60;
 * @package     SpApi
 */
class ItemOffersRequestParamsTest extends TestCase
{

    private ItemOffersRequestParams $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemOffersRequestParams();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemOffersRequestParams"
     */
    public function testItemOffersRequestParams()
    {
        $this->assertInstanceOf(ItemOffersRequestParams::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "item_condition"
     */
    public function testPropertyItemCondition()
    {
        $enumInstance = new \SpApi\Model\pricing\v0\ItemCondition();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setItemCondition($testValue);
        $this->assertEquals($testValue, $this->model->getItemCondition());
    }

    /**
     * Test attribute "customer_type"
     */
    public function testPropertyCustomerType()
    {
        $enumInstance = new \SpApi\Model\pricing\v0\CustomerType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCustomerType($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerType());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }
}
