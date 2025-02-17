<?php
/**
 * GetMessagingActionResponseLinksTest
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
use SpApi\Model\messaging\v1\GetMessagingActionResponseLinks;

/**
 * GetMessagingActionResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description The links response that is associated with the messaging action.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\messaging\v1\LinkObject();
        
        $this->model->setSelf($testValue);
        $this->assertEquals($testValue, $this->model->getSelf());
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \SpApi\Model\messaging\v1\LinkObject();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }
}
