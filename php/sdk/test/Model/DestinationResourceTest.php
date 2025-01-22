<?php
/**
 * DestinationResourceTest
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
use OpenAPI\Client\Model\notifications\DestinationResource;

/**
 * DestinationResourceTest Class Doc Comment
 *
 * @category    Class
 * @description The destination resource types.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\notifications\SqsResource();
        
        $this->model->setSqs($testValue);
        $this->assertEquals($testValue, $this->model->getSqs());
    }

    /**
     * Test attribute "event_bridge"
     */
    public function testPropertyEventBridge()
    {
        
        $testValue = new \OpenAPI\Client\Model\notifications\EventBridgeResource();
        
        $this->model->setEventBridge($testValue);
        $this->assertEquals($testValue, $this->model->getEventBridge());
    }
}
