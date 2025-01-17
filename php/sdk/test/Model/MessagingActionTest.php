<?php
/**
 * MessagingActionTest
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
use OpenAPI\Client\Model\messaging\MessagingAction;

/**
 * MessagingActionTest Class Doc Comment
 *
 * @category    Class
 * @description A simple object containing the name of the template.
 * @package     OpenAPI\Client
 */
class MessagingActionTest extends TestCase
{

    private MessagingAction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MessagingAction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MessagingAction"
     */
    public function testMessagingAction()
    {
        $this->assertInstanceOf(MessagingAction::class, $this->model);
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
}
