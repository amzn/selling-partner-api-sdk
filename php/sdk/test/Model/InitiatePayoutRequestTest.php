<?php
/**
 * InitiatePayoutRequestTest
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
use SpApi\Model\transfers\v2024_06_01\InitiatePayoutRequest;

/**
 * InitiatePayoutRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;initiatePayout&#x60; operation.
 * @package     SpApi
 */
class InitiatePayoutRequestTest extends TestCase
{

    private InitiatePayoutRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InitiatePayoutRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InitiatePayoutRequest"
     */
    public function testInitiatePayoutRequest()
    {
        $this->assertInstanceOf(InitiatePayoutRequest::class, $this->model);
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
     * Test attribute "account_type"
     */
    public function testPropertyAccountType()
    {
        $testValue = 'test';
        
        $this->model->setAccountType($testValue);
        $this->assertEquals($testValue, $this->model->getAccountType());
    }
}
