<?php
/**
 * FeesEstimateIdentifierTest
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
use SpApi\Model\productFees\v0\FeesEstimateIdentifier;

/**
 * FeesEstimateIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description An item identifier, marketplace, time of request, and other details that identify an estimate.
 * @package     SpApi
 */
class FeesEstimateIdentifierTest extends TestCase
{

    private FeesEstimateIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeesEstimateIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeesEstimateIdentifier"
     */
    public function testFeesEstimateIdentifier()
    {
        $this->assertInstanceOf(FeesEstimateIdentifier::class, $this->model);
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
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
    }

    /**
     * Test attribute "id_type"
     */
    public function testPropertyIdType()
    {
        $enumInstance = new \SpApi\Model\productFees\v0\IdType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setIdType($testValue);
        $this->assertEquals($testValue, $this->model->getIdType());
    }

    /**
     * Test attribute "id_value"
     */
    public function testPropertyIdValue()
    {
        $testValue = 'test';
        
        $this->model->setIdValue($testValue);
        $this->assertEquals($testValue, $this->model->getIdValue());
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
     * Test attribute "seller_input_identifier"
     */
    public function testPropertySellerInputIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setSellerInputIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getSellerInputIdentifier());
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
