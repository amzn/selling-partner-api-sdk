<?php
/**
 * GetMessagingActionResponseLinksTest
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
use OpenAPI\Client\Model\messaging\GetMessagingActionResponseLinks;

/**
 * GetMessagingActionResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description GetMessagingActionResponseLinks
 * @package     OpenAPI\Client
 */
class GetMessagingActionResponseLinksTest extends TestCase
{

    private GetMessagingActionResponseLinks $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMessagingActionResponseLinks();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMessagingActionResponseLinks"
     */
    public function testGetMessagingActionResponseLinks()
    {
        $this->assertInstanceOf(GetMessagingActionResponseLinks::class, $this->model);
    }

    /**
     * Test attribute "self"
     */
    public function testPropertySelf()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \OpenAPI\Client\Model\messaging\LinkObject();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
