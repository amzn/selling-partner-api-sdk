<?php
/**
 * InputTypeTest
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
use OpenAPI\Client\Model\shipping\InputType;

/**
 * InputTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of Input.
 * @package     OpenAPI\Client
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
