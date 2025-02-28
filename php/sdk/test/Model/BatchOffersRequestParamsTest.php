<?php
/**
 * BatchOffersRequestParamsTest
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
use SpApi\Model\pricing\v0\BatchOffersRequestParams;

/**
 * BatchOffersRequestParamsTest Class Doc Comment
 *
 * @category    Class
 * @description Common request parameters that can be accepted by &#x60;ItemOffersRequest&#x60; and &#x60;ListingOffersRequest&#x60;
 * @package     SpApi
 */
class BatchOffersRequestParamsTest extends TestCase
{

    private BatchOffersRequestParams $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BatchOffersRequestParams();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BatchOffersRequestParams"
     */
    public function testBatchOffersRequestParams()
    {
        $this->assertInstanceOf(BatchOffersRequestParams::class, $this->model);
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
}
