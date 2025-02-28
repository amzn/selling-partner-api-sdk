<?php
/**
 * EngineOutputUnitTest
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
use SpApi\Model\vehicles\v2024_11_01\EngineOutputUnit;

/**
 * EngineOutputUnitTest Class Doc Comment
 *
 * @category    Class
 * @description Unit for measuring engine power.
 * @package     SpApi
 */
class EngineOutputUnitTest extends TestCase
{

    private EngineOutputUnit $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EngineOutputUnit();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EngineOutputUnit"
     */
    public function testEngineOutputUnit()
    {
        $this->assertInstanceOf(EngineOutputUnit::class, $this->model);
    }
}
