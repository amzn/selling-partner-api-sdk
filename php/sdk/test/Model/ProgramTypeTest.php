<?php
/**
 * ProgramTypeTest
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
use SpApi\Model\replenishment\v2022_11_07\ProgramType;

/**
 * ProgramTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The replenishment program type.
 * @package     SpApi
 */
class ProgramTypeTest extends TestCase
{

    private ProgramType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProgramType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProgramType"
     */
    public function testProgramType()
    {
        $this->assertInstanceOf(ProgramType::class, $this->model);
    }
}
