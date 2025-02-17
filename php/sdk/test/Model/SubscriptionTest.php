<?php
/**
 * SubscriptionTest
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
use SpApi\Model\notifications\v1\Subscription;

/**
 * SubscriptionTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the subscription.
 * @package     SpApi
 */
class SubscriptionTest extends TestCase
{

    private Subscription $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Subscription();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Subscription"
     */
    public function testSubscription()
    {
        $this->assertInstanceOf(Subscription::class, $this->model);
    }

    /**
     * Test attribute "subscription_id"
     */
    public function testPropertySubscriptionId()
    {
        $testValue = 'test';
        
        $this->model->setSubscriptionId($testValue);
        $this->assertEquals($testValue, $this->model->getSubscriptionId());
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
