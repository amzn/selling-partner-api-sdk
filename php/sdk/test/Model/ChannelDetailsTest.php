<?php
/**
 * ChannelDetailsTest
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
use SpApi\Model\shipping\v2\ChannelDetails;

/**
 * ChannelDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment source channel related information.
 * @package     SpApi
 */
class ChannelDetailsTest extends TestCase
{

    private ChannelDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ChannelDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ChannelDetails"
     */
    public function testChannelDetails()
    {
        $this->assertInstanceOf(ChannelDetails::class, $this->model);
    }

    /**
     * Test attribute "channel_type"
     */
    public function testPropertyChannelType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\ChannelType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setChannelType($testValue);
        $this->assertEquals($testValue, $this->model->getChannelType());
    }

    /**
     * Test attribute "amazon_order_details"
     */
    public function testPropertyAmazonOrderDetails()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\AmazonOrderDetails();
        
        $this->model->setAmazonOrderDetails($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderDetails());
    }

    /**
     * Test attribute "amazon_shipment_details"
     */
    public function testPropertyAmazonShipmentDetails()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\AmazonShipmentDetails();
        
        $this->model->setAmazonShipmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonShipmentDetails());
    }
}
