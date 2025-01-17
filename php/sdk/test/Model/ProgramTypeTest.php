<?php
/**
 * ProgramTypeTest
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
use OpenAPI\Client\Model\replenishment\ProgramType;

/**
 * ProgramTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The replenishment program type.
 * @package     OpenAPI\Client
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
