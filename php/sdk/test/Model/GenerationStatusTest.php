<?php
/**
 * GenerationStatusTest
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
use OpenAPI\Client\Model\shipping\v2\GenerationStatus;

/**
 * GenerationStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Generation Status.
 * @package     OpenAPI\Client
 */
class GenerationStatusTest extends TestCase
{

    private GenerationStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GenerationStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GenerationStatus"
     */
    public function testGenerationStatus()
    {
        $this->assertInstanceOf(GenerationStatus::class, $this->model);
    }
}
