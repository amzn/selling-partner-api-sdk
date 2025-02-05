<?php
/**
 * InitiatePayoutResponseTest
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
use OpenAPI\Client\Model\transfers\v2024_06_01\InitiatePayoutResponse;

/**
 * InitiatePayoutResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;initiatePayout&#x60; operation.
 * @package     OpenAPI\Client
 */
class InitiatePayoutResponseTest extends TestCase
{

    private InitiatePayoutResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InitiatePayoutResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InitiatePayoutResponse"
     */
    public function testInitiatePayoutResponse()
    {
        $this->assertInstanceOf(InitiatePayoutResponse::class, $this->model);
    }

    /**
     * Test attribute "payout_reference_id"
     */
    public function testPropertyPayoutReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setPayoutReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getPayoutReferenceId());
    }
}
