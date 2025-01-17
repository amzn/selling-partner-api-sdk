<?php
/**
 * EventBridgeResourceTest
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
use OpenAPI\Client\Model\notifications\EventBridgeResource;

/**
 * EventBridgeResourceTest Class Doc Comment
 *
 * @category    Class
 * @description The Amazon EventBridge destination.
 * @package     OpenAPI\Client
 */
class EventBridgeResourceTest extends TestCase
{

    private EventBridgeResource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EventBridgeResource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EventBridgeResource"
     */
    public function testEventBridgeResource()
    {
        $this->assertInstanceOf(EventBridgeResource::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
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
