<?php
/**
 * WindowInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\WindowInput;

/**
 * WindowInputTest Class Doc Comment
 *
 * @category    Class
 * @description Contains only a starting DateTime.
 * @package     SpApi
 */
class WindowInputTest extends TestCase
{

    private WindowInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new WindowInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "WindowInput"
     */
    public function testWindowInput()
    {
        $this->assertInstanceOf(WindowInput::class, $this->model);
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
