<?php
/**
 * UnitOfLengthTest
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
use OpenAPI\Client\Model\easyship\UnitOfLength;

/**
 * UnitOfLengthTest Class Doc Comment
 *
 * @category    Class
 * @description The unit of measurement used to measure the length.
 * @package     OpenAPI\Client
 */
class UnitOfLengthTest extends TestCase
{

    private UnitOfLength $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnitOfLength();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnitOfLength"
     */
    public function testUnitOfLength()
    {
        $this->assertInstanceOf(UnitOfLength::class, $this->model);
    }
}
