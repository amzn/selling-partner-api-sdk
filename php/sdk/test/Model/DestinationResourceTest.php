<?php
/**
 * DestinationResourceTest
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
use SpApi\Model\notifications\v1\DestinationResource;

/**
 * DestinationResourceTest Class Doc Comment
 *
 * @category    Class
 * @description The destination resource types.
 * @package     SpApi
 */
class DestinationResourceTest extends TestCase
{

    private DestinationResource $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DestinationResource();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DestinationResource"
     */
    public function testDestinationResource()
    {
        $this->assertInstanceOf(DestinationResource::class, $this->model);
    }

    /**
     * Test attribute "sqs"
     */
    public function testPropertySqs()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\SqsResource();
        
        $this->model->setSqs($testValue);
        $this->assertEquals($testValue, $this->model->getSqs());
    }

    /**
     * Test attribute "event_bridge"
     */
    public function testPropertyEventBridge()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\EventBridgeResource();
        
        $this->model->setEventBridge($testValue);
        $this->assertEquals($testValue, $this->model->getEventBridge());
    }
}
