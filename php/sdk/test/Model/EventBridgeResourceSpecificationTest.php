<?php
/**
 * EventBridgeResourceSpecificationTest
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
use OpenAPI\Client\Model\notifications\EventBridgeResourceSpecification;

/**
 * EventBridgeResourceSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description The information required to create an Amazon EventBridge destination.
 * @package     OpenAPI\Client
 */
class EventBridgeResourceSpecificationTest extends TestCase
{

    private EventBridgeResourceSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EventBridgeResourceSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EventBridgeResourceSpecification"
     */
    public function testEventBridgeResourceSpecification()
    {
        $this->assertInstanceOf(EventBridgeResourceSpecification::class, $this->model);
    }

    /**
     * Test attribute "region"
     */
    public function testPropertyRegion()
    {
        $testValue = 'test';
        
        $this->model->setRegion($testValue);
        $this->assertEquals($testValue, $this->model->getRegion());
    }

    /**
     * Test attribute "account_id"
     */
    public function testPropertyAccountId()
    {
        $testValue = 'test';
        
        $this->model->setAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getAccountId());
    }
}
