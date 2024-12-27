<?php
/**
 * ListingOffersRequestTest
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
use OpenAPI\Client\Model\pricingv0\ListingOffersRequest;

/**
 * ListingOffersRequestTest Class Doc Comment
 *
 * @category    Class
 * @description ListingOffersRequest
 * @package     OpenAPI\Client
 */
class ListingOffersRequestTest extends TestCase
{

    private ListingOffersRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListingOffersRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListingOffersRequest"
     */
    public function testListingOffersRequest()
    {
        $this->assertInstanceOf(ListingOffersRequest::class, $this->model);
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
        $enumInstance = new \OpenAPI\Client\Model\pricingv0\HttpMethod();
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
        
        $testValue = new array<string,string>();
        
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
        $enumInstance = new \OpenAPI\Client\Model\pricingv0\ItemCondition();
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
        $enumInstance = new \OpenAPI\Client\Model\pricingv0\CustomerType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCustomerType($testValue);
        $this->assertEquals($testValue, $this->model->getCustomerType());
    }
}
