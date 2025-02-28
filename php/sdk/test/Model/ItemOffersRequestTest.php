<?php
/**
 * ItemOffersRequestTest
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
use SpApi\Model\pricing\v0\ItemOffersRequest;

/**
 * ItemOffersRequestTest Class Doc Comment
 *
 * @category    Class
 * @description List of request parameters can be accepted by &#x60;ItemOffersRequests&#x60; operation
 * @package     SpApi
 */
class ItemOffersRequestTest extends TestCase
{

    private ItemOffersRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemOffersRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemOffersRequest"
     */
    public function testItemOffersRequest()
    {
        $this->assertInstanceOf(ItemOffersRequest::class, $this->model);
    }

    /**
     * Test attribute "uri"
     */
    public function testPropertyUri()
    {
        $testValue = 'test';
        
        $this->model->setUri($testValue);
        $this->assertEquals($testValue, $this->model->getUri());
    }

    /**
     * Test attribute "method"
     */
    public function testPropertyMethod()
    {
        $enumInstance = new \SpApi\Model\pricing\v0\HttpMethod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setMethod($testValue);
        $this->assertEquals($testValue, $this->model->getMethod());
    }

    /**
     * Test attribute "headers"
     */
    public function testPropertyHeaders()
    {
        $testValue = array();
        
        $this->model->setHeaders($testValue);
        $this->assertEquals($testValue, $this->model->getHeaders());
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
