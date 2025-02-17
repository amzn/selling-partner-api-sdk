<?php
/**
 * InputTypeTest
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
use SpApi\Model\shipping\v2\InputType;

/**
 * InputTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of Input.
 * @package     SpApi
 */
class InputTypeTest extends TestCase
{

    private InputType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InputType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InputType"
     */
    public function testInputType()
    {
        $this->assertInstanceOf(InputType::class, $this->model);
    }
}
