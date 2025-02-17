<?php
/**
 * CreateSubscriptionRequestTest
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
use SpApi\Model\notifications\v1\CreateSubscriptionRequest;

/**
 * CreateSubscriptionRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the &#x60;createSubscription&#x60; operation.
 * @package     SpApi
 */
class CreateSubscriptionRequestTest extends TestCase
{

    private CreateSubscriptionRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateSubscriptionRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateSubscriptionRequest"
     */
    public function testCreateSubscriptionRequest()
    {
        $this->assertInstanceOf(CreateSubscriptionRequest::class, $this->model);
    }

    /**
     * Test attribute "payload_version"
     */
    public function testPropertyPayloadVersion()
    {
        $testValue = 'test';
        
        $this->model->setPayloadVersion($testValue);
        $this->assertEquals($testValue, $this->model->getPayloadVersion());
    }

    /**
     * Test attribute "destination_id"
     */
    public function testPropertyDestinationId()
    {
        $testValue = 'test';
        
        $this->model->setDestinationId($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationId());
    }

    /**
     * Test attribute "processing_directive"
     */
    public function testPropertyProcessingDirective()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\ProcessingDirective();
        
        $this->model->setProcessingDirective($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingDirective());
    }
}
