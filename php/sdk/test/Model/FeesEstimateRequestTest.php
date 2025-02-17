<?php
/**
 * FeesEstimateRequestTest
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
use SpApi\Model\productFees\v0\FeesEstimateRequest;

/**
 * FeesEstimateRequestTest Class Doc Comment
 *
 * @category    Class
 * @description A product, marketplace, and proposed price used to request estimated fees.
 * @package     SpApi
 */
class FeesEstimateRequestTest extends TestCase
{

    private FeesEstimateRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeesEstimateRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeesEstimateRequest"
     */
    public function testFeesEstimateRequest()
    {
        $this->assertInstanceOf(FeesEstimateRequest::class, $this->model);
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
     * Test attribute "is_amazon_fulfilled"
     */
    public function testPropertyIsAmazonFulfilled()
    {
        $testValue = true;
        
        $this->model->setIsAmazonFulfilled($testValue);
        $this->assertEquals($testValue, $this->model->getIsAmazonFulfilled());
    }

    /**
     * Test attribute "price_to_estimate_fees"
     */
    public function testPropertyPriceToEstimateFees()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\PriceToEstimateFees();
        
        $this->model->setPriceToEstimateFees($testValue);
        $this->assertEquals($testValue, $this->model->getPriceToEstimateFees());
    }

    /**
     * Test attribute "identifier"
     */
    public function testPropertyIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifier());
    }

    /**
     * Test attribute "optional_fulfillment_program"
     */
    public function testPropertyOptionalFulfillmentProgram()
    {
        $enumInstance = new \SpApi\Model\productFees\v0\OptionalFulfillmentProgram();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOptionalFulfillmentProgram($testValue);
        $this->assertEquals($testValue, $this->model->getOptionalFulfillmentProgram());
    }
}
