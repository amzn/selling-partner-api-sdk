<?php
/**
 * DirectPurchaseRequestTest
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
use SpApi\Model\shipping\v2\DirectPurchaseRequest;

/**
 * DirectPurchaseRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the directPurchaseShipment operation. When the channel type is Amazon, the shipTo address is not required and will be ignored.
 * @package     SpApi
 */
class DirectPurchaseRequestTest extends TestCase
{

    private DirectPurchaseRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DirectPurchaseRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DirectPurchaseRequest"
     */
    public function testDirectPurchaseRequest()
    {
        $this->assertInstanceOf(DirectPurchaseRequest::class, $this->model);
    }

    /**
     * Test attribute "ship_to"
     */
    public function testPropertyShipTo()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setShipTo($testValue);
        $this->assertEquals($testValue, $this->model->getShipTo());
    }

    /**
     * Test attribute "ship_from"
     */
    public function testPropertyShipFrom()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setShipFrom($testValue);
        $this->assertEquals($testValue, $this->model->getShipFrom());
    }

    /**
     * Test attribute "return_to"
     */
    public function testPropertyReturnTo()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setReturnTo($testValue);
        $this->assertEquals($testValue, $this->model->getReturnTo());
    }

    /**
     * Test attribute "packages"
     */
    public function testPropertyPackages()
    {
        $testValue = [];
        
        $this->model->setPackages($testValue);
        $this->assertEquals($testValue, $this->model->getPackages());
    }

    /**
     * Test attribute "channel_details"
     */
    public function testPropertyChannelDetails()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\ChannelDetails();
        
        $this->model->setChannelDetails($testValue);
        $this->assertEquals($testValue, $this->model->getChannelDetails());
    }

    /**
     * Test attribute "label_specifications"
     */
    public function testPropertyLabelSpecifications()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\RequestedDocumentSpecification();
        
        $this->model->setLabelSpecifications($testValue);
        $this->assertEquals($testValue, $this->model->getLabelSpecifications());
    }
}
