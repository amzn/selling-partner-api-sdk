<?php
/**
 * ListHandoverSlotsRequestTest
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
use SpApi\Model\easyship\v2022_03_23\ListHandoverSlotsRequest;

/**
 * ListHandoverSlotsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;listHandoverSlots&#x60; operation.
 * @package     SpApi
 */
class ListHandoverSlotsRequestTest extends TestCase
{

    private ListHandoverSlotsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListHandoverSlotsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListHandoverSlotsRequest"
     */
    public function testListHandoverSlotsRequest()
    {
        $this->assertInstanceOf(ListHandoverSlotsRequest::class, $this->model);
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
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "package_dimensions"
     */
    public function testPropertyPackageDimensions()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\Dimensions();
        
        $this->model->setPackageDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getPackageDimensions());
    }

    /**
     * Test attribute "package_weight"
     */
    public function testPropertyPackageWeight()
    {
        
        $testValue = new \SpApi\Model\easyship\v2022_03_23\Weight();
        
        $this->model->setPackageWeight($testValue);
        $this->assertEquals($testValue, $this->model->getPackageWeight());
    }
}
