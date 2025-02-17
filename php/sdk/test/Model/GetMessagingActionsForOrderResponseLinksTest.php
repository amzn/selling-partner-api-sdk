<?php
/**
 * GetMessagingActionsForOrderResponseLinksTest
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
use SpApi\Model\messaging\v1\GetMessagingActionsForOrderResponseLinks;

/**
 * GetMessagingActionsForOrderResponseLinksTest Class Doc Comment
 *
 * @category    Class
 * @description The links response that is associated with the specified &#x60;amazonOrderId&#x60;.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\messaging\v1\LinkObject();
        
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
