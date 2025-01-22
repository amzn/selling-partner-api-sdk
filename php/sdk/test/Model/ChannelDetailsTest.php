<?php
/**
 * ChannelDetailsTest
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
use OpenAPI\Client\Model\shipping\ChannelDetails;

/**
 * ChannelDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment source channel related information.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\shipping\ChannelType();
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
        
        $testValue = new \OpenAPI\Client\Model\shipping\AmazonOrderDetails();
        
        $this->model->setAmazonOrderDetails($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderDetails());
    }

    /**
     * Test attribute "amazon_shipment_details"
     */
    public function testPropertyAmazonShipmentDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\AmazonShipmentDetails();
        
        $this->model->setAmazonShipmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonShipmentDetails());
    }
}
