<?php
/**
 * GetMessagingActionsForOrderResponseLinksTest
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
use OpenAPI\Client\Model\messaging\GetMessagingActionsForOrderResponseLinks;

/**
 * GetMessagingActionsForOrderResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description GetMessagingActionsForOrderResponseLinks
 * @package     OpenAPI\Client
 */
class GetMessagingActionsForOrderResponseLinksTest extends TestCase
{

    private GetMessagingActionsForOrderResponseLinks $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMessagingActionsForOrderResponseLinks();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMessagingActionsForOrderResponseLinks"
     */
    public function testGetMessagingActionsForOrderResponseLinks()
    {
        $this->assertInstanceOf(GetMessagingActionsForOrderResponseLinks::class, $this->model);
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
     * Test attribute "actions"
     */
    public function testPropertyActions()
    {
        $testValue = [];
        
        $this->model->setActions($testValue);
        $this->assertEquals($testValue, $this->model->getActions());
    }
}
