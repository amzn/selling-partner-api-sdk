<?php
/**
 * WindowTest
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
use OpenAPI\Client\Model\fulfillmentInbound\Window;

/**
 * WindowTest Class Doc Comment
 *
 * @category    Class
 * @description Contains a start and end DateTime representing a time range.
 * @package     OpenAPI\Client
 */
class WindowTest extends TestCase
{

    private Window $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Window();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Window"
     */
    public function testWindow()
    {
        $this->assertInstanceOf(Window::class, $this->model);
    }

    /**
     * Test attribute "editable_until"
     */
    public function testPropertyEditableUntil()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEditableUntil($testValue);
        $this->assertEquals($testValue, $this->model->getEditableUntil());
    }

    /**
     * Test attribute "end"
     */
    public function testPropertyEnd()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEnd($testValue);
        $this->assertEquals($testValue, $this->model->getEnd());
    }

    /**
     * Test attribute "start"
     */
    public function testPropertyStart()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStart($testValue);
        $this->assertEquals($testValue, $this->model->getStart());
    }
}
