<?php
/**
 * ReturnAuthorizationTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ReturnAuthorization;

/**
 * ReturnAuthorizationTest Class Doc Comment
 *
 * @category    Class
 * @description Return authorization information for items accepted for return.
 * @package     SpApi
 */
class ReturnAuthorizationTest extends TestCase
{

    private ReturnAuthorization $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReturnAuthorization();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReturnAuthorization"
     */
    public function testReturnAuthorization()
    {
        $this->assertInstanceOf(ReturnAuthorization::class, $this->model);
    }

    /**
     * Test attribute "return_authorization_id"
     */
    public function testPropertyReturnAuthorizationId()
    {
        $testValue = 'test';
        
        $this->model->setReturnAuthorizationId($testValue);
        $this->assertEquals($testValue, $this->model->getReturnAuthorizationId());
    }

    /**
     * Test attribute "fulfillment_center_id"
     */
    public function testPropertyFulfillmentCenterId()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentCenterId($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentCenterId());
    }

    /**
     * Test attribute "return_to_address"
     */
    public function testPropertyReturnToAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Address();
        
        $this->model->setReturnToAddress($testValue);
        $this->assertEquals($testValue, $this->model->getReturnToAddress());
    }

    /**
     * Test attribute "amazon_rma_id"
     */
    public function testPropertyAmazonRmaId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonRmaId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonRmaId());
    }

    /**
     * Test attribute "rma_page_url"
     */
    public function testPropertyRmaPageUrl()
    {
        $testValue = 'test';
        
        $this->model->setRmaPageUrl($testValue);
        $this->assertEquals($testValue, $this->model->getRmaPageUrl());
    }
}
