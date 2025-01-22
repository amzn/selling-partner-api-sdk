<?php
/**
 * DestinationResourceSpecificationTest
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
use OpenAPI\Client\Model\notifications\DestinationResourceSpecification;

/**
 * DestinationResourceSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description The information required to create a destination resource. Applications should use one resource type (sqs or eventBridge) per destination.
 * @package     OpenAPI\Client
 */
class DestinationResourceSpecificationTest extends TestCase
{

    private DestinationResourceSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DestinationResourceSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DestinationResourceSpecification"
     */
    public function testDestinationResourceSpecification()
    {
        $this->assertInstanceOf(DestinationResourceSpecification::class, $this->model);
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
        
        $testValue = new \OpenAPI\Client\Model\notifications\EventBridgeResourceSpecification();
        
        $this->model->setEventBridge($testValue);
        $this->assertEquals($testValue, $this->model->getEventBridge());
    }
}
