<?php
/**
 * CodeTest
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
use OpenAPI\Client\Model\easyship\v2022_03_23\Code;

/**
 * CodeTest Class Doc Comment
 *
 * @category    Class
 * @description An error code that identifies the type of error that occurred. The error codes listed below are specific to the Easy Ship section.
 * @package     OpenAPI\Client
 */
class CodeTest extends TestCase
{

    private Code $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Code();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Code"
     */
    public function testCode()
    {
        $this->assertInstanceOf(Code::class, $this->model);
    }
}
