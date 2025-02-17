<?php
/**
 * GetMessagingActionsForOrderResponseEmbeddedTest
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
use SpApi\Model\messaging\v1\GetMessagingActionsForOrderResponseEmbedded;

/**
 * GetMessagingActionsForOrderResponseEmbeddedTest Class Doc Comment
 *
 * @category    Class
 * @description The messaging actions response that is associated with the specified &#x60;amazonOrderId&#x60;.
 * @package     SpApi
 */
class GetMessagingActionsForOrderResponseEmbeddedTest extends TestCase
{

    private GetMessagingActionsForOrderResponseEmbedded $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetMessagingActionsForOrderResponseEmbedded();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetMessagingActionsForOrderResponseEmbedded"
     */
    public function testGetMessagingActionsForOrderResponseEmbedded()
    {
        $this->assertInstanceOf(GetMessagingActionsForOrderResponseEmbedded::class, $this->model);
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
