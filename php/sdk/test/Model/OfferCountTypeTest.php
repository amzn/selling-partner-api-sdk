<?php
/**
 * OfferCountTypeTest
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
use OpenAPI\Client\Model\pricingV0\OfferCountType;

/**
 * OfferCountTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The total number of offers for the specified condition and fulfillment channel.
 * @package     OpenAPI\Client
 */
class OfferCountTypeTest extends TestCase
{

    private OfferCountType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferCountType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferCountType"
     */
    public function testOfferCountType()
    {
        $this->assertInstanceOf(OfferCountType::class, $this->model);
    }

    /**
     * Test attribute "condition"
     */
    public function testPropertyCondition()
    {
        $testValue = 'test';
        
        $this->model->setCondition($testValue);
        $this->assertEquals($testValue, $this->model->getCondition());
    }

    /**
     * Test attribute "fulfillment_channel"
     */
    public function testPropertyFulfillmentChannel()
    {
        $enumInstance = new \OpenAPI\Client\Model\pricingV0\FulfillmentChannelType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentChannel($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentChannel());
    }

    /**
     * Test attribute "offer_count"
     */
    public function testPropertyOfferCount()
    {
        $testValue = 123;
        
        $this->model->setOfferCount($testValue);
        $this->assertEquals($testValue, $this->model->getOfferCount());
    }
}
